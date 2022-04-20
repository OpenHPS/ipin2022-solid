import { SerializableObject } from "@openhps/core";
import { ogc } from "@openhps/rdf/vocab";
import { DataFactory } from 'n3';
import { Geometry } from "./Geometry";

@SerializableObject({
    rdf: {
        serializer: (geometry: PolygonGeometry) => {
            return {
                predicates: {
                    [ogc.asWKT]: [
                        DataFactory.literal(`POLYGON Z((${geometry.coords
                            .map(coord => `${coord.longitude} ${coord.latitude} ${coord.altitude}`)
                            .join(", ")}))`, 
                            DataFactory.namedNode(ogc.wktLiteral)),
                    ],
                    [ogc.coordinateDimension]: [DataFactory.literal(3)],
                    [ogc.spatialDimension]: [DataFactory.literal(3)],
                    [ogc.dimension]: [DataFactory.literal(3)],
                }
            };
        }
    }
})
export class PolygonGeometry extends Geometry {
    coords: { latitude: number, longitude: number, altitude: number }[] = [];
}
