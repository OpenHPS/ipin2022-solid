(function(){var e={62102:function(e,t,i){"use strict";var r=i(20144),o=i(74480),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("MainPage")],1)},s=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app"},[i("b-tabs",[i("b-tab-item",{attrs:{label:"Position"}},[i("b-table",{attrs:{data:e.observations.positions,columns:e.columns.positions}})],1),i("b-tab-item",{attrs:{label:"Orientation"}},[i("b-table",{attrs:{data:e.observations.orientations,columns:e.columns.orientations}})],1),i("b-tab-item",{attrs:{label:"Velocity"}},[i("b-table",{attrs:{data:e.observations.positions,columns:e.columns.positions}})],1)],1),i("LoginModal",{attrs:{controller:e.controller}})],1)},l=[],d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-modal",{attrs:{active:e.active,"has-modal-card":"","can-cancel":!1,"aria-role":"dialog","aria-label":"Solid Login","aria-modal":""}},[i("form",{attrs:{action:""},on:{submit:function(t){t.preventDefault(),e.login()}}},[i("div",{staticClass:"modal-card",staticStyle:{width:"100%"}},[i("header",{staticClass:"modal-card-head"},[i("p",{staticClass:"modal-card-title"},[e._v("Login to Solid Provider")])]),i("section",{staticClass:"modal-card-body"},[i("b-field",{attrs:{label:"Solid Issuer"}},[i("b-input",{attrs:{type:"url",placeholder:"Your Solid Issuer",required:""},model:{value:e.issuer,callback:function(t){e.issuer=t},expression:"issuer"}})],1)],1),i("footer",{staticClass:"modal-card-foot"},[i("b-button",{attrs:{label:"Login",type:"is-primary"},on:{click:e.login}})],1)])])])},p=[],u={name:"LoginModal",props:["controller"],data(){return{issuer:null,active:!0}},methods:{login(){this.controller.login(this.issuer)},isLoggedIn(){return!!this.controller&&this.controller.isLoggedIn}},mounted(){this.controller.once("ready",(()=>{this.active=!1}))}},c=u,g=i(1001),y=(0,g.Z)(c,d,p,!1,null,"071106ca",null),m=y.exports,h=(i(7780),i(72765)),f=i(80313),v=i(13294),b=i(38638),w=i(97365),S=i(44654);let P=class extends S.OD{constructor(...e){super(...e),(0,h.Z)(this,"label",void 0),(0,h.Z)(this,"comment",void 0),(0,h.Z)(this,"featureOfInterest",void 0)}};(0,f.gn)([(0,v._J)({rdf:{predicate:b.Zv.label,language:"en"}}),(0,f.w6)("design:type",String)],P.prototype,"label",void 0),(0,f.gn)([(0,v._J)({rdf:{predicate:b.Zv.comment,language:"en"}}),(0,f.w6)("design:type",String)],P.prototype,"comment",void 0),(0,f.gn)([(0,v._J)({rdf:{predicate:b.Nj.isPropertyOf,serializer:e=>w.DataFactory.namedNode(e),deserializer:e=>e.value}}),(0,f.w6)("design:type",String)],P.prototype,"featureOfInterest",void 0),P=(0,f.gn)([(0,v.iN)({rdf:{type:b.tZ.ObservableProperty}})],P);let _=class extends S.OD{constructor(...e){super(...e),(0,h.Z)(this,"label",void 0),(0,h.Z)(this,"comment",void 0),(0,h.Z)(this,"properties",[])}};(0,f.gn)([(0,v._J)({rdf:{predicate:b.Zv.label,language:"en"}}),(0,f.w6)("design:type",String)],_.prototype,"label",void 0),(0,f.gn)([(0,v._J)({rdf:{predicate:b.Zv.comment,language:"en"}}),(0,f.w6)("design:type",String)],_.prototype,"comment",void 0),(0,f.gn)([(0,v.hZ)(P,{rdf:{predicate:b.Nj.hasProperty}}),(0,f.w6)("design:type",Array)],_.prototype,"properties",void 0),_=(0,f.gn)([(0,v.iN)({rdf:{type:b.tZ.FeatureOfInterest}})],_);let Z=class extends S.OD{constructor(...e){super(...e),(0,h.Z)(this,"resultTime",void 0),(0,h.Z)(this,"featuresOfInterest",[]),(0,h.Z)(this,"observedProperties",[]),(0,h.Z)(this,"results",[]),(0,h.Z)(this,"usedProcedures",[])}};(0,f.gn)([(0,v._J)({rdf:{predicate:b.tZ.resultTime,datatype:S.eF.dateTime}}),(0,f.w6)("design:type",Date)],Z.prototype,"resultTime",void 0),(0,f.gn)([(0,v.hZ)(_,{rdf:{predicate:b.tZ.hasFeatureOfInterest}}),(0,f.w6)("design:type",Array)],Z.prototype,"featuresOfInterest",void 0),(0,f.gn)([(0,v.hZ)(P,{rdf:{predicate:b.tZ.observedProperty}}),(0,f.w6)("design:type",Array)],Z.prototype,"observedProperties",void 0),(0,f.gn)([(0,v.hZ)(Object,{rdf:{predicate:b.tZ.hasResult}}),(0,f.w6)("design:type",Array)],Z.prototype,"results",void 0),(0,f.gn)([(0,v.hZ)(String,{rdf:{predicate:b.tZ.usedProcedure,serializer:e=>S.xZ.namedNode(e),deserializer:e=>e.value}}),(0,f.w6)("design:type",Array)],Z.prototype,"usedProcedures",void 0),Z=(0,f.gn)([(0,v.iN)({rdf:{type:b.tZ.Observation}})],Z);let O=class{constructor(){(0,h.Z)(this,"unit",void 0),(0,h.Z)(this,"numericValue",void 0)}};(0,f.gn)([(0,v._J)({rdf:{predicate:b.wY.unit}}),(0,f.w6)("design:type",v.fb)],O.prototype,"unit",void 0),(0,f.gn)([(0,v._J)({rdf:{predicate:b.wY.numericValue}}),(0,f.w6)("design:type",Number)],O.prototype,"numericValue",void 0),O=(0,f.gn)([(0,v.iN)({rdf:{type:b.wY.QuantityValue}})],O);let I=class{constructor(){(0,h.Z)(this,"spatialAccuracy",void 0)}};(0,f.gn)([(0,v._J)({rdf:{predicate:b.p7.hasSpatialAccuracy}}),(0,f.w6)("design:type",O)],I.prototype,"spatialAccuracy",void 0),I=(0,f.gn)([(0,v.iN)({rdf:{type:b.p7.Geometry}})],I);let D=class extends I{constructor(...e){super(...e),(0,h.Z)(this,"latitude",void 0),(0,h.Z)(this,"longitude",void 0),(0,h.Z)(this,"altitude",void 0)}};D=(0,f.gn)([(0,v.iN)({rdf:{serializer:e=>({predicates:{[b.p7.asWKT]:[e.altitude?w.DataFactory.literal(`POINT Z(${e.longitude} ${e.latitude} ${e.altitude})`,w.DataFactory.namedNode(b.p7.wktLiteral)):w.DataFactory.literal(`POINT(${e.longitude} ${e.latitude})`,w.DataFactory.namedNode(b.p7.wktLiteral))],[b.p7.coordinateDimension]:[w.DataFactory.literal(e.altitude?3:2)],[b.p7.spatialDimension]:[w.DataFactory.literal(e.altitude?3:2)],[b.p7.dimension]:[w.DataFactory.literal(e.altitude?3:2)]}})}})],D);let L=class extends I{constructor(...e){super(...e),(0,h.Z)(this,"coords",[])}};L=(0,f.gn)([(0,v.iN)({rdf:{serializer:e=>({predicates:{[b.p7.asWKT]:[w.DataFactory.literal(`POLYGON Z((${e.coords.map((e=>`${e.longitude} ${e.latitude} ${e.altitude}`)).join(", ")}))`,w.DataFactory.namedNode(b.p7.wktLiteral))],[b.p7.coordinateDimension]:[w.DataFactory.literal(3)],[b.p7.spatialDimension]:[w.DataFactory.literal(3)],[b.p7.dimension]:[w.DataFactory.literal(3)]}})}})],L);let N=class extends S.OD{constructor(...e){super(...e),(0,h.Z)(this,"label",void 0),(0,h.Z)(this,"comment",void 0)}};(0,f.gn)([(0,v._J)({rdf:{predicate:b.Zv.label,language:"en"}}),(0,f.w6)("design:type",String)],N.prototype,"label",void 0),(0,f.gn)([(0,v._J)({rdf:{predicate:b.Zv.comment,language:"en"}}),(0,f.w6)("design:type",String)],N.prototype,"comment",void 0),N=(0,f.gn)([(0,v.iN)({rdf:{type:b.tZ.Platform}})],N);let T=class{constructor(){(0,h.Z)(this,"street",void 0),(0,h.Z)(this,"country",void 0)}};(0,f.gn)([(0,v._J)({rdf:{predicate:b.w_.street_address}}),(0,f.w6)("design:type",String)],T.prototype,"street",void 0),(0,f.gn)([(0,v._J)({rdf:{predicate:b.w_.country_name}}),(0,f.w6)("design:type",String)],T.prototype,"country",void 0),T=(0,f.gn)([(0,v.iN)({rdf:{type:b.w_.Address}})],T);let E=class{constructor(){(0,h.Z)(this,"label",void 0),(0,h.Z)(this,"comment",void 0),(0,h.Z)(this,"platform",void 0),(0,h.Z)(this,"geometry",void 0),(0,h.Z)(this,"address",void 0),(0,h.Z)(this,"within",void 0)}};var F;(0,f.gn)([(0,v._J)({rdf:{predicate:b.Zv.label,language:"en"}}),(0,f.w6)("design:type",String)],E.prototype,"label",void 0),(0,f.gn)([(0,v._J)({rdf:{predicate:b.Zv.comment,language:"en"}}),(0,f.w6)("design:type",String)],E.prototype,"comment",void 0),(0,f.gn)([(0,v._J)({rdf:{predicate:b.Nj.deployedOnPlatform,language:"en"}}),(0,f.w6)("design:type",N)],E.prototype,"platform",void 0),(0,f.gn)([(0,v._J)({rdf:{predicate:b.p7.hasGeometry}}),(0,f.w6)("design:type",L)],E.prototype,"geometry",void 0),(0,f.gn)([(0,v._J)({rdf:{predicate:b.w_.hasAddress}}),(0,f.w6)("design:type",T)],E.prototype,"address",void 0),(0,f.gn)([(0,v._J)({rdf:{predicate:b.p7.sfWithin}}),(0,f.w6)("design:type",String)],E.prototype,"within",void 0),E=(0,f.gn)([(0,v.iN)({rdf:{type:[b.Nj.Deployment,b.p7.SpatialObject]}})],E);let q=F=class extends S.OD{constructor(...e){super(...e),(0,h.Z)(this,"label",void 0),(0,h.Z)(this,"comment",void 0),(0,h.Z)(this,"deployment",void 0),(0,h.Z)(this,"subSystems",[]),(0,h.Z)(this,"procedures",[])}};(0,f.gn)([(0,v._J)({rdf:{predicate:b.Zv.label,language:"en"}}),(0,f.w6)("design:type",String)],q.prototype,"label",void 0),(0,f.gn)([(0,v._J)({rdf:{predicate:b.Zv.comment,language:"en"}}),(0,f.w6)("design:type",String)],q.prototype,"comment",void 0),(0,f.gn)([(0,v._J)({rdf:{predicate:b.Nj.hasDeployment,language:"en"}}),(0,f.w6)("design:type",E)],q.prototype,"deployment",void 0),(0,f.gn)([(0,v.hZ)(F,{rdf:{predicate:b.Nj.hasSubSystem}}),(0,f.w6)("design:type",Array)],q.prototype,"subSystems",void 0),(0,f.gn)([(0,v.hZ)(F,{rdf:{predicate:b.Nj._implements}}),(0,f.w6)("design:type",Array)],q.prototype,"procedures",void 0),q=F=(0,f.gn)([(0,v.iN)({rdf:{type:b.Nj.System}})],q);let R=class extends S.OD{constructor(...e){super(...e),(0,h.Z)(this,"label",void 0),(0,h.Z)(this,"comment",void 0),(0,h.Z)(this,"forProperty",void 0),(0,h.Z)(this,"minValue",void 0),(0,h.Z)(this,"maxValue",void 0),(0,h.Z)(this,"unit",void 0)}};(0,f.gn)([(0,v._J)({rdf:{predicate:b.Zv.label,language:"en"}}),(0,f.w6)("design:type",String)],R.prototype,"label",void 0),(0,f.gn)([(0,v._J)({rdf:{predicate:b.Zv.comment,language:"en"}}),(0,f.w6)("design:type",String)],R.prototype,"comment",void 0),(0,f.gn)([(0,v._J)({rdf:{predicate:b.Nj.forProperty}}),(0,f.w6)("design:type",P)],R.prototype,"forProperty",void 0),(0,f.gn)([(0,v._J)({rdf:{predicate:b.fK.minValue}}),(0,f.w6)("design:type",Number)],R.prototype,"minValue",void 0),(0,f.gn)([(0,v._J)({rdf:{predicate:b.fK.maxValue}}),(0,f.w6)("design:type",Number)],R.prototype,"maxValue",void 0),(0,f.gn)([(0,v._J)({rdf:{predicate:b.fK.unitCode}}),(0,f.w6)("design:type",v.fb)],R.prototype,"unit",void 0),R=(0,f.gn)([(0,v.iN)({rdf:{type:b.gL.Accuracy}})],R);let A=class extends S.OD{constructor(...e){super(...e),(0,h.Z)(this,"label",void 0),(0,h.Z)(this,"comment",void 0)}};(0,f.gn)([(0,v._J)({rdf:{predicate:b.Zv.label,language:"en"}}),(0,f.w6)("design:type",String)],A.prototype,"label",void 0),(0,f.gn)([(0,v._J)({rdf:{predicate:b.Zv.comment,language:"en"}}),(0,f.w6)("design:type",String)],A.prototype,"comment",void 0),A=(0,f.gn)([(0,v.iN)({rdf:{type:b.tZ.Procedure}})],A);var J=i(24408);const j=new J.Nc("PL9").setUID("deployment_pl9").setBounds({topLeft:new v.sX(50.8203726927966,4.392241309019189),width:46.275,height:37.27,rotation:-34.04}),$=new J.OR("PL9.3").setUID("deployment_pl9_3").setBuilding(j).setBounds([new v.Sb(0,0),new v.Sb(0,13.73),new v.Sb(10.102,13.73),new v.Sb(10.102,23.54),new v.Sb(0,23.54),new v.Sb(0,37.27),new v.Sb(44.33,37.27),new v.Sb(44.33,23.54),new v.Sb(28.06,23.54),new v.Sb(28.06,13.73),new v.Sb(44.33,13.73),new v.Sb(44.33,0)]).setFloorNumber(3),x=(new J.du("PL9.3.60").setUID("deployment_pl9_3_60").setFloor($).setBounds([new v.Sb(.57,31.25),new v.Sb(4.75,37.02)]),new J.du("PL9.3.58").setUID("deployment_pl9_3_58").setFloor($).setBounds([new v.Sb(4.75,31.25),new v.Sb(8.35,37.02)]),new J.du("PL9.3.56").setUID("deployment_pl9_3_56").setFloor($).setBounds([new v.Sb(8.35,31.25),new v.Sb(13.15,37.02)]),new J.du("PL9.3.32").setUID("deployment_pl9_3_32").setFloor($).setBounds([new v.Sb(29.97,31.25),new v.Sb(34.77,37.02)]),new J.du("PL9.3.54").setUID("deployment_pl9_3_54").setFloor($).setBounds([new v.Sb(13.15,31.25),new v.Sb(25.15,37.02)]),new J.du("PL9.3.62").setUID("deployment_pl9_3_62").setFloor($).setBounds([new v.Sb(27.55,24.105),new v.Sb(35.95,29.5)]),new J.CL("Corridor").setUID("deployment_pl9_3_corridor").setFloor($).setBounds([new v.Sb(2.39,6.015),new v.Sb(2.39,7.715),new v.Sb(18.015,7.715),new v.Sb(18.015,29.555),new v.Sb(2.39,29.555),new v.Sb(2.39,31.255),new v.Sb(41.94,31.255),new v.Sb(41.94,29.555),new v.Sb(20.315,29.555),new v.Sb(20.315,7.715),new v.Sb(41.94,7.715),new v.Sb(41.94,6.015)]),new J.ld("Lobby #1").setUID("deployment_pl9_3_lobby_1").setFloor($).setBounds([new v.Sb(20.315,20.155),new v.Sb(25.765,27.27)]),new J.ld("Lobby #2").setUID("deployment_pl9_3_lobby_2").setFloor($).setBounds([new v.Sb(18.015,.57),new v.Sb(20.315,6.015)]),new J.ld("Toilets #1").setUID("deployment_pl9_3_toilets_1").setFloor($).setBounds([new v.Sb(15.48,10.51),new v.Sb(18.015,12.71)]),new J.ld("Toilets #2").setUID("deployment_pl9_3_toilets_2").setFloor($).setBounds([new v.Sb(15.48,24.56),new v.Sb(18.015,26.76)]),new J.CL("Elevators").setUID("deployment_pl9_3_elevators").setFloor($).setBounds([new v.Sb(10.73,17.22),new v.Sb(18.02,20.06)]),new J.CL("Staircase").setUID("deployment_pl9_3_staircase").setFloor($).setBounds([new v.Sb(20.315,17.22),new v.Sb(27.56,20.06)]),"http://example.com/tracking.ttl#");var V=i(12402),B=i(75991),C=i(39223),U=i(10593),M=i(25108);const k=i(15515);class X extends U.EventEmitter{constructor(e){super(),(0,h.Z)(this,"service",void 0),(0,h.Z)(this,"session",void 0),(0,h.Z)(this,"me",void 0),(0,h.Z)(this,"positionProperty",void 0),(0,h.Z)(this,"orientationProperty",void 0),(0,h.Z)(this,"velocityProperty",void 0),(0,h.Z)(this,"driver",void 0),this.service=new V.pJ({clientName:e,dataServiceDriver:new C.w(String,{namespace:"example"}),restorePreviousSession:!0}),this.driver=new V.t6(v.Lo),this.service.emit("build"),this.service.on("login",(e=>{M.log(`Logged in ${e.info.webId}`),this.initialize()}))}get isLoggedIn(){return void 0!==this.session&&this.session.info.isLoggedIn}getPropertyURI(e,t){return this.service.getDocumentURL(e,`/properties/${t}.ttl`).href}async login(e){await this.service.login(e)}getSession(){return this.service.session}async initialize(){const e=this.getSession(),t=await this.service.getThing(e,e.info.webId),i=((0,B.gPA)(t,b.w_.fn)??(0,B.gPA)(t,b.ay.name)).value;this.me=new _(e.info.webId),this.positionProperty=new P(this.getPropertyURI(e,"position")),this.positionProperty.comment=`Geographical position of ${i}`,this.positionProperty.label="Geographical Position",this.positionProperty.featureOfInterest=this.me.value;const r=new R(this.getPropertyURI(e,"position")+"#accuracy");if(r.unit=v.MD.METER,r.minValue=-1,r.minValue=1,r.forProperty=this.positionProperty,r.label="Maximum accuracy",r.comment="The maximum accuracy for the geographical position",this.orientationProperty=new P(this.getPropertyURI(e,"orientation")),this.orientationProperty.comment=`Orientation of ${i}`,this.orientationProperty.label="Orientation",this.orientationProperty.featureOfInterest=this.me.value,this.velocityProperty=new P(this.getPropertyURI(e,"velocity")),this.velocityProperty.comment=`Velocity of ${i}`,this.velocityProperty.label="Velocity",this.velocityProperty.featureOfInterest=this.me.value,this.me.properties.push(this.positionProperty),this.me.properties.push(this.orientationProperty),this.me.properties.push(this.velocityProperty),t.predicates[b.Nj.hasProperty]||void 0===t)return M.log("Properties already exist!",this.me.id),void this.emit("ready");{const t=S.HW.serializeToSubjects(this.me);t.forEach((t=>{this.service.setThing(e,t)})),this.service.setThing(e,S.HW.serializeToSubjects(r)[0])}M.log("Created properties for",this.me.id),this.emit("ready")}async updatePosition(e){const t=this.getSession();void 0!==t&&(e.lnglat&&this.createPosition(t,e),e.heading&&this.createOrientation(t,e),e.speed&&this.createVelocity(t,e))}async findAllPositions(e,t,i=20){const r=await this.driver.queryBindingsSolid(`\n            PREFIX geosparql: <http://www.opengis.net/ont/geosparql#>\n            PREFIX geof: <http://www.opengis.net/def/function/geosparql/>\n            PREFIX ssn: <http://www.w3.org/ns/ssn/>\n            PREFIX sosa: <http://www.w3.org/ns/sosa/>\n            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n            PREFIX qudt: <http://qudt.org/schema/qudt/>\n\n            SELECT ?posGeoJSON ?datetime ?accuracy ?procedureLabel {\n                ?profile a sosa:FeatureOfInterest ;\n                        ssn:hasProperty ?property .\n                ?observation sosa:hasResult ?result ;\n                            sosa:observedProperty ?property ;\n                            sosa:resultTime ?datetime .\n                OPTIONAL {\n                    ?observation sosa:usedProcedure ?procedure .\n                    ?procedure rdfs:label ?procedureLabel .\n                }\n                ?result a geosparql:Geometry ;\n                        geosparql:hasSpatialAccuracy ?spatialAccuracy ;\n                        geosparql:asWKT ?posWKT .\n                BIND(geof:asGeoJSON(?posWKT) AS ?posGeoJSON)\n                {\n                    ?spatialAccuracy qudt:numericValue ?value ;\n                                    qudt:unit ?unit .\n                    OPTIONAL { ?unit qudt:conversionMultiplier ?multiplier }\n                    OPTIONAL { ?unit qudt:conversionOffset ?offset }\n                    BIND(COALESCE(?multiplier, 1) as ?multiplier)\n                    BIND(COALESCE(?offset, 0) as ?offset)\n                    BIND(((?value * ?multiplier) + ?offset) AS ?accuracy)\n                    ${t?`FILTER(?accuracy <= ${t})`:""}\n                }\n            } ORDER BY DESC(?datetime) LIMIT ${i}\n        `,e,{extensionFunctions:{"http://www.opengis.net/def/function/geosparql/asGeoJSON"(e){const t=e[0],i=/^<(https?:\/\/.*)>/g;let r=t.value.replace(i,"").replace("\n","").trim();const o=k.parse(r);return S.xZ.literal(JSON.stringify(o),b.p7.geoJSONLiteral)}}});return r.map((e=>{const t=JSON.parse(e.get("posGeoJSON").value);if(t){const i=t.coordinates;return{latlng:i.splice(0,2),altitude:3===i.length?i[2]:void 0,timestamp:Date.parse(e.get("datetime").value),accuracy:Number(e.get("accuracy").value),procedure:e.get("procedureLabel")?e.get("procedureLabel").value:void 0}}})).filter((e=>void 0!==e))}async findAllVelocities(e,t=20){const i=await this.driver.queryBindingsSolid(`\n            PREFIX ssn: <http://www.w3.org/ns/ssn/>\n            PREFIX sosa: <http://www.w3.org/ns/sosa/>\n            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n            PREFIX qudt: <http://qudt.org/schema/qudt/>\n            PREFIX quantitykind: <http://qudt.org/vocab/quantitykind/>\n\n            SELECT ?speed ?datetime ?procedureLabel {\n                ?profile a sosa:FeatureOfInterest ;\n                        ssn:hasProperty ?property .\n                ?observation sosa:hasResult ?result ;\n                            sosa:observedProperty ?property ;\n                            sosa:resultTime ?datetime .\n                OPTIONAL {\n                    ?observation sosa:usedProcedure ?procedure .\n                    ?procedure rdfs:label ?procedureLabel .\n                }\n                ?result a qudt:QuantityValue ;\n                        qudt:unit ?unit ;\n                        qudt:numericValue ?speed .\n                { ?unit qudt:hasQuantityKind quantitykind:Velocity }\n                UNION\n                { ?unit qudt:hasQuantityKind quantitykind:Speed }\n            } ORDER BY DESC(?datetime) LIMIT ${t}\n        `,e);return i.map((e=>({speed:Number(e.get("speed").value),timestamp:Date.parse(e.get("datetime").value),procedure:e.get("procedureLabel")?e.get("procedureLabel").value:void 0}))).filter((e=>void 0!==e))}async findAllOrientations(e,t=20){const i=await this.driver.queryBindingsSolid(`\n            PREFIX ssn: <http://www.w3.org/ns/ssn/>\n            PREFIX sosa: <http://www.w3.org/ns/sosa/>\n            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n            PREFIX qudt: <http://qudt.org/schema/qudt/>\n            PREFIX quantitykind: <http://qudt.org/vocab/quantitykind/>\n\n            SELECT ?heading ?datetime ?procedureLabel {\n                ?profile a sosa:FeatureOfInterest ;\n                        ssn:hasProperty ?property .\n                ?observation sosa:hasResult ?result ;\n                            sosa:observedProperty ?property ;\n                            sosa:resultTime ?datetime .\n                OPTIONAL {\n                    ?observation sosa:usedProcedure ?procedure .\n                    ?procedure rdfs:label ?procedureLabel .\n                }\n                ?result a qudt:QuantityValue ;\n                        qudt:unit ?unit ;\n                        qudt:numericValue ?heading .\n                ?unit qudt:hasQuantityKind quantitykind:Angle .\n            } ORDER BY DESC(?datetime) LIMIT ${t}\n        `,e);return i.map((e=>({heading:Number(e.get("heading").value),timestamp:Date.parse(e.get("datetime").value),procedure:e.get("procedureLabel")?e.get("procedureLabel").value:void 0}))).filter((e=>void 0!==e))}async createPosition(e,t){const i=new Date,r=new Z(this.service.getDocumentURL(e,`/properties/position.ttl#${i.getTime()}`).href);r.featuresOfInterest.push(this.me),r.resultTime=i,r.observedProperties.push(this.positionProperty);const o=new O;o.numericValue=t.accuracy,o.unit=v.MD.METER;const n=new D;n.latitude=t.lnglat[1],n.longitude=t.lnglat[0],n.altitude=t.altitude,n.spatialAccuracy=o,r.results.push(n),t.procedure&&r.usedProcedures.push(`${x}${t.procedure}`),await this.service.setThing(e,S.HW.serializeToSubjects(r)[0])}async createOrientation(e,t){const i=new Date,r=new Z(this.service.getDocumentURL(e,`/properties/orientation.ttl#${i.getTime()}`).href);r.featuresOfInterest.push(this.me),r.resultTime=i,r.observedProperties.push(this.orientationProperty);const o=new O;o.unit=v.KL.DEGREE,o.numericValue=t.heading,r.results.push(o),t.procedure&&r.usedProcedures.push(`${x}${t.procedure}`),await this.service.setThing(e,S.HW.serializeToSubjects(r)[0])}async createVelocity(e,t){const i=new Date,r=new Z(this.service.getDocumentURL(e,`/properties/velocity.ttl#${i.getTime()}`).href);r.featuresOfInterest.push(this.me),r.resultTime=i,r.observedProperties.push(this.velocityProperty);const o=new O;o.unit=v.hi.METER_PER_SECOND,o.numericValue=t.speed,r.results.push(o),t.procedure&&r.usedProcedures.push(`${x}${t.procedure}`),await this.service.setThing(e,S.HW.serializeToSubjects(r)[0])}}var z=i(25108),G={name:"MainPage",components:{LoginModal:m},data(){return{controller:null,columns:{positions:[{field:"datetime",label:"Date"},{field:"latitude",label:"Latitude"},{field:"longitude",label:"Longitude"},{field:"altitude",label:"Altitude"},{field:"accuracy",label:"Accuracy"},{field:"system",label:"System"}],orientations:[{field:"datetime",label:"Date"},{field:"heading",label:"Heading (degrees)"},{field:"system",label:"System"}],velocities:[{field:"datetime",label:"Date"},{field:"speed",label:"Speed"},{field:"system",label:"System"}]},observations:{positions:[],velocities:[],orientations:[]}}},beforeMount(){this.controller=new X("IPIN2022 Consumer Application")},mounted(){this.controller.once("ready",(()=>{this.loadOrientations(),this.loadPositions(),this.loadVelocities()}))},methods:{loadPositions(){this.controller.findAllPositions(this.controller.getSession(),50).then((e=>{this.observations.positions=e.map((e=>({datetime:new Date(e.timestamp).toTimeString(),longitude:e.latlng[0],latitude:e.latlng[1],altitude:e.altitude?e.altitude:"",accuracy:e.accuracy?e.accuracy+"m":"",system:e.procedure?e.procedure:""})))})).catch(z.error)},loadOrientations(){this.controller.findAllOrientations(this.controller.getSession(),50).then((e=>{z.log(e),this.observations.orientations=e.map((e=>({datetime:new Date(e.timestamp).toTimeString(),heading:e.heading,system:e.procedure?e.procedure:""})))})).catch(z.error)},loadVelocities(){this.controller.findAllVelocities(this.controller.getSession(),50).then((e=>{z.log(e),this.observations.velocities=e.map((e=>({datetime:new Date(e.timestamp).toTimeString(),speed:e.speed+"m/s",system:e.procedure?e.procedure:""})))})).catch(z.error)}}},K=G,W=(0,g.Z)(K,a,l,!1,null,"1db92a84",null),Y=W.exports,H={name:"App",components:{MainPage:Y}},Q=H,ee=(0,g.Z)(Q,n,s,!1,null,null,null),te=ee.exports;r.Z.config.productionTip=!1,r.Z.use(o.ZP,{defaultIconPack:"fa"}),new r.Z({render:e=>e(te)}).$mount("#app")},47412:function(){},47714:function(){},55843:function(){},95260:function(){},33587:function(){},60939:function(){},61324:function(){},81200:function(){},52361:function(){},94616:function(){}},t={};function i(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=e,i.c=t,function(){var e=[];i.O=function(t,r,o,n){if(!r){var s=1/0;for(p=0;p<e.length;p++){r=e[p][0],o=e[p][1],n=e[p][2];for(var a=!0,l=0;l<r.length;l++)(!1&n||s>=n)&&Object.keys(i.O).every((function(e){return i.O[e](r[l])}))?r.splice(l--,1):(a=!1,n<s&&(s=n));if(a){e.splice(p--,1);var d=o();void 0!==d&&(t=d)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[r,o,n]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};i.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var n=Object.create(null);i.r(n);var s={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){s[e]=function(){return r[e]}}));return s["default"]=function(){return r},i.d(n,s),n}}(),function(){i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={826:0};i.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,n,s=r[0],a=r[1],l=r[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(l)var p=l(i)}for(t&&t(r);d<s.length;d++)n=s[d],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(p)},r=self["webpackChunkipin2022_consumer"]=self["webpackChunkipin2022_consumer"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=i.O(void 0,[998],(function(){return i(i.s=62102)}));r=i.O(r)})();
//# sourceMappingURL=index.c0d49b65.js.map