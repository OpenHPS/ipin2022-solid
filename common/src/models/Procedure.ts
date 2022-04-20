import { SerializableMember, SerializableObject } from "@openhps/core";
import { SerializableNamedNode } from "@openhps/rdf/serialization";
import { sosa, rdfs } from "@openhps/rdf/vocab";

@SerializableObject({
    rdf: {
        type: sosa.Procedure
    }
})
export class Procedure extends SerializableNamedNode {
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
}
