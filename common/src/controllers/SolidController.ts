import { AngleUnit, DataObject, LengthUnit, LinearVelocityUnit } from '@openhps/core';
import { 
    IriString, 
    RDFSerializer,
    DataFactory,
    Term
} from '@openhps/rdf/serialization';
import { vcard, ogc, ssn, foaf } from '@openhps/rdf/vocab';
import type { Bindings } from '@openhps/rdf/sparql';
import { SolidClientService, SolidDataDriver, } from '@openhps/solid/browser';
import {
    FeatureOfInterest, 
    PointGeometry, 
    ObservableProperty, 
    Observation, 
    PropertyAccuracy, 
    QuantityValue,
    GeolocationPosition,
    BASE_URI
} from "../models";
import { ProxyHandlerStatic } from "@comunica/actor-http-proxy";
import {
    getLiteral,
} from '@inrupt/solid-client';
import {
    LocalStorageDriver
} from '@openhps/localstorage';
import { EventEmitter } from 'events';
import type { SolidSession } from '@openhps/solid';
const wkt = require('wkt');

/**
 * Solid controller for handling remote data storage
 */
export class SolidController extends EventEmitter {
    public service: SolidClientService;
    protected session: SolidSession;
    protected me: FeatureOfInterest;
    protected positionProperty: ObservableProperty;
    protected orientationProperty: ObservableProperty;
    protected velocityProperty: ObservableProperty;
    protected driver: SolidDataDriver<DataObject>;

    /**
     * Create a new Solid app
     *
     * @param {string} clientName Client name to show to the user when logging in
     */
    constructor(clientName: string) {
        super();
        this.service = new SolidClientService({
            clientName,
            dataServiceDriver: new LocalStorageDriver(String, {
                namespace: clientName.toLowerCase().replace(/\s/g, "_"),
            }),
            restorePreviousSession: true
        });
        this.driver = new SolidDataDriver(DataObject);
        this.service.emit("build");
        this.service.on("login", (session: SolidSession) => {
            console.log(`Logged in ${session.info.webId}`);
            this.initialize();
        });
    }

    /**
     * Check if the current session is logged in
     */
    get isLoggedIn() {
        return this.session !== undefined && this.session.info.isLoggedIn;
    }

    /**
     * Get the property URI to use for data store
     *
     * @param session 
     * @param property 
     * @returns 
     */
    protected getPropertyURI(session: SolidSession, property: string): IriString {
        return this.service.getDocumentURL(session, `/properties/${property}.ttl`).href as IriString;
    }

    /**
     * Login to a Solid provider
     *
     * @param {IriString} issuer Solid issuer IRI
     */
    async login(issuer: IriString) {
        await this.service.login(issuer);
    }
    
    /**
     * Logout a solid session 
     */
    async logout() {
        await this.service.logout(this.getSession() as any);
    }

    /**
     * Get the current session
     *
     * @returns {SolidSession} Solid session
     */
    getSession(): SolidSession {
        return this.service.session;
    }
    
    /**
     * Initialize the properties of the user
     */
    async initialize() {
        const session = this.getSession();
        const card = await this.service.getThing(session, session.info.webId);

        // User description
        const name = (getLiteral(card, vcard.fn) ?? getLiteral(card, foaf.name)).value;
        this.me = new FeatureOfInterest(session.info.webId);

        // Properties of user
        this.positionProperty = new ObservableProperty(this.getPropertyURI(session, "position"));
        this.positionProperty.comment = `Geographical position of ${name}`;
        this.positionProperty.label = "Geographical Position";
        this.positionProperty.featureOfInterest = this.me.value as IriString;
        const positionPropertyAccuracy = new PropertyAccuracy(this.getPropertyURI(session, "position") + "#accuracy");
        positionPropertyAccuracy.unit = LengthUnit.METER;
        positionPropertyAccuracy.minValue = -1;
        positionPropertyAccuracy.minValue = 1;
        positionPropertyAccuracy.forProperty = this.positionProperty;
        positionPropertyAccuracy.label = "Maximum accuracy";
        positionPropertyAccuracy.comment = "The maximum accuracy for the geographical position";

        this.orientationProperty = new ObservableProperty(this.getPropertyURI(session, "orientation"));
        this.orientationProperty.comment = `Orientation of ${name}`;
        this.orientationProperty.label = "Orientation";
        this.orientationProperty.featureOfInterest = this.me.value as IriString;
        
        this.velocityProperty = new ObservableProperty(this.getPropertyURI(session, "velocity"));
        this.velocityProperty.comment = `Velocity of ${name}`;
        this.velocityProperty.label = "Velocity";
        this.velocityProperty.featureOfInterest = this.me.value as IriString;

        this.me.properties.push(this.positionProperty);
        this.me.properties.push(this.orientationProperty);
        this.me.properties.push(this.velocityProperty);
        
        // Do not update if there are already properties added
        if (card.predicates[ssn.hasProperty] || card === undefined) {
            console.log("Properties already exist!", this.me.id);
            this.emit('ready');
            return;
        } else {
            const subjects = RDFSerializer.serializeToSubjects(this.me);
            subjects.forEach(subject => {
                this.service.setThing(session, subject);
            });
            this.service.setThing(session, RDFSerializer.serializeToSubjects(positionPropertyAccuracy)[0]);
        }
        console.log("Created properties for", this.me.id);
        this.emit('ready');
    }

    /**
     * Update the position of a user
     *
     * @param {GeolocationPosition} data Position
     */
    async updatePosition(data: GeolocationPosition) {
        const session = this.getSession();
        if (session === undefined) {
            return;
        }

        console.debug("Updating position", data);

        if (data.lnglat)
            this.createPosition(session, data);
        if (data.heading)
            this.createOrientation(session, data);
        if (data.speed)
            this.createVelocity(session, data);
    }

    findDeployment(deploymentUri: IriString): Promise<any> {
        return new Promise((resolve, reject) => {
            this.driver.queryBindings(`
                PREFIX geosparql: <http://www.opengis.net/ont/geosparql#>
                PREFIX geof: <http://www.opengis.net/def/function/geosparql/>
                PREFIX ssn: <http://www.w3.org/ns/ssn/>
                PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

                SELECT ?deploymentLabel ?deploymentGeometryJSON {
                    <${deploymentUri}> a geosparql:SpatialObject ;
                                a ssn:Deployment ;
                                rdfs:label ?deploymentLabel ;
                                geosparql:hasGeometry ?deploymentGeometry .
                    ?deploymentGeometry a geosparql:Geometry ;
                                geosparql:asWKT ?deploymentGeometryWKT .
                    BIND(geof:asGeoJSON(?deploymentGeometryWKT) AS ?deploymentGeometryJSON)
                } LIMIT 1
            `, {
                sources: [deploymentUri.replace("http:", "https:")],
                httpProxyHandler: new ProxyHandlerStatic("https://proxy.linkeddatafragments.org/"),
                extensionFunctions: {
                    // GeoSPARQL 1.1 specification is still in draft
                    // this is the implementation of the asGeoJSON function in the proposal
                    'http://www.opengis.net/def/function/geosparql/asGeoJSON'(args: Term[]) {
                        const wktLiteral = args[0];
                        const pattern = /^<(https?:\/\/.*)>/g;
                        let wktString: string = wktLiteral.value.replace(pattern, "").replace("\n", "").trim();
                        const geoJSON = wkt.parse(wktString);
                        return DataFactory.literal(JSON.stringify(geoJSON), ogc.geoJSONLiteral);
                    }
                } as any
            }).then(bindings => {
                const results = bindings.map((binding: Bindings) => {
                    return {
                        uri: deploymentUri,
                        label: binding.get("deploymentLabel") ? binding.get("deploymentLabel").value : undefined,
                        geometry: binding.get("deploymentGeometryJSON") ? 
                            JSON.parse(binding.get("deploymentGeometryJSON").value).coordinates : undefined,
                    };
                }).filter(d => d !== undefined);
                resolve(results.length > 0 ? results[0] : undefined);
            }).catch(reject);
        });
    }

    findProcedure(procedureUri: IriString): Promise<any> {
        return new Promise((resolve, reject) => {
            this.driver.queryBindings(`
                PREFIX sosa: <http://www.w3.org/ns/sosa/>
                PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                PREFIX ssn: <http://www.w3.org/ns/ssn/>

                SELECT ?procedureLabel ?procedureComment {
                    <${procedureUri}> rdfs:label ?procedureLabel ;
                    OPTIONAL { 
                        <${procedureUri}> rdfs:comment ?procedureComment ;
                    }
                } LIMIT 1
            `, {
                sources: [procedureUri.replace("http:", "https:")],
                httpProxyHandler: new ProxyHandlerStatic("https://proxy.linkeddatafragments.org/"),
            }).then(bindings => {
                const results = bindings.map((binding: Bindings) => {
                    return {
                        uri: procedureUri,
                        label: binding.get("procedureLabel") ? binding.get("procedureLabel").value : undefined,
                        comments: binding.get("procedureComment") ? binding.get("procedureComment").value : undefined,
                    };
                }).filter(p => p !== undefined);
                resolve(results.length > 0 ? results[0] : undefined);
            }).catch(reject);
        });
    }

    /**
     * Find all positions
     *
     * @param {SolidSession} session Solid Pod to get positions for
     * @param {number} [minAccuracy] Minimum accuracy
     * @param {number} [limit] Amount of positions to fetch 
     * @param {IriString | IriString[]} [procedure] Optional filter on the procedure used
     * @returns {Promise<GeolocationPosition[]>} Promise of geolocation interface with position
     */
    findAllPositions(session: SolidSession, minAccuracy?: number, 
        limit: number = 20, procedure?: IriString | IriString[]): Promise<GeolocationPosition[]> {
        return new Promise((resolve, reject) => {
            this.driver.queryBindingsSolid(`
                PREFIX geosparql: <http://www.opengis.net/ont/geosparql#>
                PREFIX geof: <http://www.opengis.net/def/function/geosparql/>
                PREFIX ssn: <http://www.w3.org/ns/ssn/>
                PREFIX sosa: <http://www.w3.org/ns/sosa/>
                PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                PREFIX qudt: <http://qudt.org/schema/qudt/>

                SELECT ?posGeoJSON ?datetime ?accuracy ?procedure ?deployment
                {
                    ?profile a sosa:FeatureOfInterest ;
                            ssn:hasProperty ?property .
                    ?observation sosa:hasResult ?result ;
                                sosa:observedProperty ?property ;
                                sosa:resultTime ?datetime .
                    OPTIONAL {
                        ?result <${BASE_URI + "inDeployment"}> ?deployment .
                    }
                    OPTIONAL {
                        ?observation sosa:usedProcedure ?procedure .
                    }
                    ?result a geosparql:Geometry ;
                            geosparql:hasSpatialAccuracy ?spatialAccuracy ;
                            geosparql:asWKT ?posWKT .
                    BIND(geof:asGeoJSON(?posWKT) AS ?posGeoJSON)
                    {
                        ?spatialAccuracy qudt:numericValue ?value ;
                                        qudt:unit ?unit .
                        OPTIONAL { ?unit qudt:conversionMultiplier ?multiplier }
                        OPTIONAL { ?unit qudt:conversionOffset ?offset }
                        BIND(COALESCE(?multiplier, 1) as ?multiplier)
                        BIND(COALESCE(?offset, 0) as ?offset)
                        BIND(((?value * ?multiplier) + ?offset) AS ?accuracy)
                        ${minAccuracy ? `FILTER(?accuracy <= ${minAccuracy})` : ""}
                    }
                    ${procedure ? `FILTER(${[...(Array.isArray(procedure) ? procedure : [procedure])]
                        .map(p => `?procedure = <${p}>`).join(" || ")})` : ""}
                } ORDER BY DESC(?datetime) LIMIT ${limit}
            `, session, {
                httpProxyHandler: new ProxyHandlerStatic("https://proxy.linkeddatafragments.org/"),
                extensionFunctions: {
                    // GeoSPARQL 1.1 specification is still in draft
                    // this is the implementation of the asGeoJSON function in the proposal
                    'http://www.opengis.net/def/function/geosparql/asGeoJSON'(args: Term[]) {
                        const wktLiteral = args[0];
                        const pattern = /^<(https?:\/\/.*)>/g;
                        let wktString: string = wktLiteral.value.replace(pattern, "").replace("\n", "").trim();
                        const geoJSON = wkt.parse(wktString);
                        return DataFactory.literal(JSON.stringify(geoJSON), ogc.geoJSONLiteral);
                    }
                } as any
            }).then(async bindings => {
                return Promise.all(bindings.map(async (binding: Bindings) => {
                    const geoJSON = JSON.parse(binding.get("posGeoJSON").value);
                    if (geoJSON) {
                        const coordinates: Array<number> = geoJSON.coordinates;
                        return {
                            latlng: coordinates.splice(0, 2),
                            altitude: coordinates.length === 3 ? coordinates[2] : undefined,
                            timestamp: Date.parse(binding.get("datetime").value),
                            accuracy: Number(binding.get("accuracy").value),
                            procedure: binding.get("procedure") ? 
                                await this.findProcedure(binding.get("procedure").value as IriString) : undefined,
                            deployment: binding.get("deployment") ? 
                                await this.findDeployment(binding.get("deployment").value as IriString) : undefined,
                        }
                    }
                }));
            }).then(bindings => {
                resolve(bindings.filter(pos => pos !== undefined));
            }).catch(reject);
        });
    }

    /**
     * Find all velocities
     *
     * @param {SolidSession} session Solid Pod to get velocities for
     * @param {number} [limit] Amount of velocities to fetch 
     * @returns {Promise<GeolocationPosition[]>} Promise of geolocation interface with speed
     */
    findAllVelocities(session: SolidSession, limit: number = 20): Promise<GeolocationPosition[]> {
        return new Promise((resolve, reject) => {
            this.driver.queryBindingsSolid(`
                PREFIX ssn: <http://www.w3.org/ns/ssn/>
                PREFIX sosa: <http://www.w3.org/ns/sosa/>
                PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                PREFIX qudt: <http://qudt.org/schema/qudt/>
                PREFIX quantitykind: <http://qudt.org/vocab/quantitykind/>

                SELECT ?speed ?datetime ?procedure {
                    ?profile a sosa:FeatureOfInterest ;
                            ssn:hasProperty ?property .
                    ?observation sosa:hasResult ?result ;
                                sosa:observedProperty ?property ;
                                sosa:resultTime ?datetime .
                    OPTIONAL {
                        ?observation sosa:usedProcedure ?procedure .
                    }
                    ?result a qudt:QuantityValue ;
                            qudt:unit ?unit ;
                            qudt:numericValue ?speed .
                    { ?unit qudt:hasQuantityKind quantitykind:Velocity }
                    UNION
                    { ?unit qudt:hasQuantityKind quantitykind:Speed }
                } ORDER BY DESC(?datetime) LIMIT ${limit}
            `, session, {
                httpProxyHandler: new ProxyHandlerStatic("https://proxy.linkeddatafragments.org/"),
            }).then(bindings => {
                return Promise.all(bindings.map(async (binding: Bindings) => ({
                    speed: Number(binding.get("speed").value),
                    timestamp: Date.parse(binding.get("datetime").value),
                    procedure: binding.get("procedure") ? 
                        await this.findProcedure(binding.get("procedure").value as IriString) : undefined,
                    deployment: binding.get("deployment") ? 
                        await this.findDeployment(binding.get("deployment").value as IriString) : undefined,
                })));
            }).then(bindings => {
                resolve(bindings.filter(obj => obj !== undefined));
            }).catch(reject);
        });
    }

    /**
     * Find all orientations
     *
     * @param {SolidSession} session Solid Pod to get orientations for
     * @param {number} [limit] Amount of orientations to fetch 
     * @returns {Promise<GeolocationPosition[]>} Promise of geolocation interface with heading
     */
    findAllOrientations(session: SolidSession, limit: number = 20): Promise<GeolocationPosition[]> {
        return new Promise((resolve, reject) => {
            this.driver.queryBindingsSolid(`
                PREFIX ssn: <http://www.w3.org/ns/ssn/>
                PREFIX sosa: <http://www.w3.org/ns/sosa/>
                PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                PREFIX qudt: <http://qudt.org/schema/qudt/>
                PREFIX quantitykind: <http://qudt.org/vocab/quantitykind/>

                SELECT ?heading ?datetime ?procedure {
                    ?profile a sosa:FeatureOfInterest ;
                            ssn:hasProperty ?property .
                    ?observation sosa:hasResult ?result ;
                                sosa:observedProperty ?property ;
                                sosa:resultTime ?datetime .
                    OPTIONAL {
                        ?observation sosa:usedProcedure ?procedure .
                    }
                    ?result a qudt:QuantityValue ;
                            qudt:unit ?unit ;
                            qudt:numericValue ?heading .
                    ?unit qudt:hasQuantityKind quantitykind:Angle .
                } ORDER BY DESC(?datetime) LIMIT ${limit}
            `, session, {
                httpProxyHandler: new ProxyHandlerStatic("https://proxy.linkeddatafragments.org/"),
            }).then(bindings => {
                return Promise.all(bindings.map(async (binding: Bindings) => ({
                    heading: Number(binding.get("heading").value),
                    timestamp: Date.parse(binding.get("datetime").value),
                    procedure: binding.get("procedure") ? 
                        await this.findProcedure(binding.get("procedure").value as IriString) : undefined,
                    deployment: binding.get("deployment") ? 
                        await this.findDeployment(binding.get("deployment").value as IriString) : undefined,
                })));
            }).then(bindings => {
                resolve(bindings.filter(obj => obj !== undefined));
            }).catch(reject);
        });
    }

    async createPosition(session: SolidSession, data: GeolocationPosition) {
        const timestamp = new Date();
        const observation = new Observation(this.service.getDocumentURL(session, `/properties/position.ttl#${timestamp.getTime()}`).href);
        observation.featuresOfInterest.push(this.me);
        observation.resultTime = timestamp;
        observation.observedProperties.push(this.positionProperty);
        const accuracy = new QuantityValue();
        accuracy.numericValue = data.accuracy;
        accuracy.unit = LengthUnit.METER;
        const position = new PointGeometry();
        position.latitude = data.lnglat[1];
        position.longitude = data.lnglat[0];
        position.altitude = data.altitude;
        position.spatialAccuracy = accuracy;
        observation.results.push(position);
        if (data.procedure && data.procedure.uri)
            observation.usedProcedures.push(data.procedure.uri);
        if (data.deployment && data.deployment.uri)
            observation.definedBy = data.deployment.uri;
        await this.service.setThing(session, RDFSerializer.serializeToSubjects(observation)[0]);
    }
    
    async createOrientation(session: SolidSession, data: GeolocationPosition) {
        const timestamp = new Date();
        const observation = new Observation(this.service.getDocumentURL(session, `/properties/orientation.ttl#${timestamp.getTime()}`).href);
        observation.featuresOfInterest.push(this.me);
        observation.resultTime = timestamp;
        observation.observedProperties.push(this.orientationProperty);
        const value = new QuantityValue();
        value.unit = AngleUnit.DEGREE;
        value.numericValue = data.heading;
        observation.results.push(value);
        if (data.procedure && data.procedure.uri)
            observation.usedProcedures.push(data.procedure.uri);
        if (data.deployment && data.deployment.uri)
            observation.definedBy = data.deployment.uri;
        await this.service.setThing(session, RDFSerializer.serializeToSubjects(observation)[0]);
    }

    async createVelocity(session: SolidSession, data: GeolocationPosition) {
        const timestamp = new Date();
        const observation = new Observation(this.service.getDocumentURL(session, `/properties/velocity.ttl#${timestamp.getTime()}`).href);
        observation.featuresOfInterest.push(this.me);
        observation.resultTime = timestamp;
        observation.observedProperties.push(this.velocityProperty);
        const value = new QuantityValue();
        value.unit = LinearVelocityUnit.METER_PER_SECOND;
        value.numericValue = data.speed;
        observation.results.push(value);
        if (data.procedure && data.procedure.uri)
            observation.usedProcedures.push(data.procedure.uri);
        if (data.deployment && data.deployment.uri)
            observation.definedBy = data.deployment.uri;
        await this.service.setThing(session, RDFSerializer.serializeToSubjects(observation)[0]);
    }
}
