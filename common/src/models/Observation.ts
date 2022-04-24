import { SerializableArrayMember, SerializableMember, SerializableObject } from '@openhps/core';
import { sosa } from '@openhps/rdf/vocab';
import { FeatureOfInterest } from './FeatureOfInterest';
import { ObservableProperty } from './ObservableProperty';
import { SerializableNamedNode, xsd, IriString, Thing, DataFactory } from '@openhps/rdf/serialization';

@SerializableObject({
    rdf: {
        type: sosa.Observation,
    },
})
export class Observation extends SerializableNamedNode {
    @SerializableMember({
        rdf: {
            predicate: sosa.resultTime,
            datatype: xsd.dateTime,
        },
    })
    resultTime: Date;

    @SerializableArrayMember(FeatureOfInterest, {
        rdf: {
            predicate: sosa.hasFeatureOfInterest,
        },
    })
    featuresOfInterest: FeatureOfInterest[] = [];

    @SerializableArrayMember(ObservableProperty, {
        rdf: {
            predicate: sosa.observedProperty,
        },
    })
    observedProperties: ObservableProperty[] = [];

    @SerializableArrayMember(Object, {
        rdf: {
            predicate: sosa.hasResult,
        },
    })
    results: Object[] = [];

    @SerializableArrayMember(String, {
        rdf: {
            predicate: sosa.usedProcedure,
            serializer: (value: string) => DataFactory.namedNode(value),
            deserializer: (thing: Thing) => thing.value,
        },
    })
    usedProcedures: IriString[] = [];
}
