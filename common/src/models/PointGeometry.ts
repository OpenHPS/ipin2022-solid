import { SerializableMember, SerializableObject } from '@openhps/core';
import { IriString, Thing } from '@openhps/rdf/serialization';
import { ogc } from '@openhps/rdf/vocab';
import { DataFactory } from 'n3';
import { BASE_URI } from './constants';
import { Geometry } from './Geometry';

@SerializableObject({
    rdf: {
        type: ogc.Geometry,
        serializer: (geometry: PointGeometry) => {
            return {
                predicates: {
                    [ogc.asWKT]: [
                        geometry.altitude
                            ? DataFactory.literal(
                                  `POINT Z(${geometry.longitude} ${geometry.latitude} ${geometry.altitude})`,
                                  DataFactory.namedNode(ogc.wktLiteral),
                              )
                            : DataFactory.literal(
                                  `POINT(${geometry.longitude} ${geometry.latitude})`,
                                  DataFactory.namedNode(ogc.wktLiteral),
                              ),
                    ],
                    [ogc.coordinateDimension]: [DataFactory.literal(geometry.altitude ? 3 : 2)],
                    [ogc.spatialDimension]: [DataFactory.literal(geometry.altitude ? 3 : 2)],
                    [ogc.dimension]: [DataFactory.literal(geometry.altitude ? 3 : 2)],
                },
            };
        },
    },
})
export class PointGeometry extends Geometry {
    latitude: number;
    longitude: number;
    altitude: number;

    @SerializableMember({
        rdf: {
            predicate: `${BASE_URI}inDeployment`,
            serializer: (value: string) => DataFactory.namedNode(value),
            deserializer: (thing: Thing) => thing.value,
        },
    })
    inDeployment: IriString;
}
