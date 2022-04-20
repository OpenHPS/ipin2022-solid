import { SerializableArrayMember, SerializableMember, SerializableObject } from "@openhps/core";
import { rdfs, sosa, ssn } from "@openhps/rdf/vocab";
import { ObservableProperty } from "./ObservableProperty";
import { SerializableNamedNode } from "@openhps/rdf/serialization";

@SerializableObject({
    rdf: {
        type: sosa.FeatureOfInterest
    }
})
export class FeatureOfInterest extends SerializableNamedNode { 
    @SerializableMember({
        rdf: {
            predicate: rdfs.label,
            language: "en"
        }
    })
    label?: string;

    @SerializableMember({
        rdf: {
            predicate: rdfs.comment,
            language: "en"
        }
    })
    comment?: string;

    @SerializableArrayMember(ObservableProperty, {
        rdf: {
            predicate: ssn.hasProperty
        }
    })
    properties?: ObservableProperty[] = [];
}
