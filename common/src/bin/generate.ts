import { SymbolicSpace } from '@openhps/geospatial';
import * as path from 'path';
import * as fs from 'fs';
import { AbsolutePosition } from '@openhps/core';
import { RDFSerializer, Store } from '@openhps/rdf';
import { BASE_URI, Spaces, Deployment, PolygonGeometry, System, Procedure } from '..';
import { building } from '../models/Spaces';

// Quad store
const store = new Store();

// Geolocation API
const system1 = new System(`${BASE_URI}system_outdoor`);
system1.label = "Outdoor positioning system";
store.addQuads(RDFSerializer.serializeToQuads(system1));
const procedure1 = new Procedure(`${BASE_URI}geolocationapi`);
procedure1.label = "Geolocation API";
system1.procedures.push(procedure1);
store.addQuads(RDFSerializer.serializeToQuads(system1));

// QR-scanner
const system2 = new System(`${BASE_URI}system_indoor`);
system2.label = "Outdoor positioning system";
const procedure2 = new Procedure(`${BASE_URI}qrscanner`);
procedure2.label = "QR-scanner";
system2.procedures.push(procedure2);

// Convert each space
Object.keys(Spaces).forEach(key => {
    const space: SymbolicSpace<AbsolutePosition> = (Spaces as any)[key];
    // Convert the space to a deployment
    const deployment = new Deployment(`${BASE_URI}${space.uid}`);
    deployment.label = space.displayName;
    deployment.geometry = new PolygonGeometry();
    deployment.geometry.coords = space.getBounds().map(coord => {
        const vector = space.transform(coord).toVector3();
        return {
            longitude: vector.x,
            latitude: vector.y,
            altitude: vector.z
        };
    });
    if (space.parentUID) {
        deployment.within = `${BASE_URI}${space.parentUID}`;
    }

    // Serialize deployment to turtle and add to tracking.ttl file
    const serialized = RDFSerializer.serialize(deployment);
    store.addQuads(RDFSerializer.serializeToQuads(serialized));
    if (space.uid === building.uid) {
        system2.deployment = deployment;
    }
});
store.addQuads(RDFSerializer.serializeToQuads(system2));

// Stringify quad store to turtle
RDFSerializer.stringify(store, {
    prettyPrint: true
}).then(value => {
    const file = path.join(__dirname, "../../dist/tracking.ttl");
    console.log(`File written to ${file}`);
    fs.writeFileSync(file, value);
});
