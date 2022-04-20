import { SerializableObject } from "@openhps/core";
import { geo } from "@openhps/rdf/dist/types/vocab/schema";
import { ogc } from "@openhps/rdf/vocab";
import { DataFactory } from 'n3';
import { Geometry } from "./Geometry";

@SerializableObject({
    rdf: {
        serializer: (geometry: PointGeometry) => {
            return {
                predicates: {
                    [ogc.asWKT]: [
                        DataFactory.literal(`POINT Z(${geometry.longitude} ${geometry.latitude} ${geometry.altitude})`, DataFactory.namedNode(ogc.wktLiteral)),
                    ],
                    [ogc.coordinateDimension]: [DataFactory.literal(3)],
                    [ogc.spatialDimension]: [DataFactory.literal(3)],
                    [ogc.dimension]: [DataFactory.literal(3)],
                }
            };
        }
    }
})
export class PointGeometry extends Geometry {
    latitude: number;
    longitude: number;
    altitude: number;
}
