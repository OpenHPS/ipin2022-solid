import { DataFactory, Quad_Object, Term } from '@openhps/rdf/serialization';
import { ogc } from '@openhps/rdf/vocab';
const wkt = require('wkt'); // eslint-disable-line

/**
 * GeoSPARQL 1.1 specification is still in draft
 * this is the implementation of the asGeoJSON function in the proposal
 *
 * @param {Term[]} args Terms as arguments
 * @returns {Promise<Quad_Object>} Quad object promise
 */
export function asGeoJSON(args: Term[]): Promise<Quad_Object> {
    return new Promise((resolve) => {
        const wktLiteral = args[0];
        const pattern = /^<(https?:\/\/.*)>/g;
        const wktString: string = wktLiteral.value.replace(pattern, '').replace('\n', '').trim();
        const geoJSON = wkt.parse(wktString);
        resolve(DataFactory.literal(JSON.stringify(geoJSON), ogc.geoJSONLiteral));
    });
}
