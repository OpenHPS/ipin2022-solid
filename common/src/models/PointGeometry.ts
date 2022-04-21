import { SerializableObject } from "@openhps/core";
import { ogc } from "@openhps/rdf/vocab";
import { DataFactory } from 'n3';
import { Geometry } from "./Geometry";

@SerializableObject({
    rdf: {
        serializer: (geometry: PointGeometry) => {
            return {
                predicates: {
                    [ogc.asWKT]: [
                        geometry.altitude ? 
                            DataFactory.literal(`POINT Z(${geometry.longitude} ${geometry.latitude} ${geometry.altitude})`, DataFactory.namedNode(ogc.wktLiteral)) :
                            DataFactory.literal(`POINT(${geometry.longitude} ${geometry.latitude})`, DataFactory.namedNode(ogc.wktLiteral)),
                    ],
                    [ogc.coordinateDimension]: [DataFactory.literal(geometry.altitude ? 3 : 2)],
                    [ogc.spatialDimension]: [DataFactory.literal(geometry.altitude ? 3 : 2)],
                    [ogc.dimension]: [DataFactory.literal(geometry.altitude ? 3 : 2)],
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
