import { SymbolicSpace } from '@openhps/geospatial';
import * as path from 'path';
import * as fs from 'fs';
import { AbsolutePosition } from '@openhps/core';
import { RDFSerializer, Store } from '@openhps/rdf';
import { BASE_URI, Spaces, Deployment, PolygonGeometry, System } from '..';

// Quad store
const store = new Store();

// Geolocation API
const system1 = new System(`${BASE_URI}`);

// QR-scanner
const system2 = new System(`${BASE_URI}`);


// Convert each space
Object.keys(Spaces).forEach(key => {
    const space: SymbolicSpace<AbsolutePosition> = (Spaces as any)[key];
    // Convert the space to a deployment
    const deployment = new Deployment();
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
    serialized.termType = "NamedNode";
    serialized.value = `${BASE_URI}${space.uid}`;
    store.addQuads(RDFSerializer.serializeToQuads(serialized));
});

// Stringify quad store to turtle
RDFSerializer.stringify(store, {
    prettyPrint: true
}).then(value => {
    const file = path.join(__dirname, "../../dist/tracking.ttl");
    console.log(`File written to ${file}`);
    fs.writeFileSync(file, value);
});
