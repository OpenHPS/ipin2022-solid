import { SerializableMember, SerializableObject } from "@openhps/core";
import { IriString } from "@openhps/rdf/serialization";
import { owl, rdfs } from "@openhps/rdf/vocab";

@SerializableObject({
    rdf: {
        type: owl.ObjectProperty
    }
})
export class ObjectProperty {
    @SerializableMember({
        rdf: {
            identifier: true
        }
    })
    uri: IriString;

    constructor(uri: IriString) {
        this.uri = uri;
    }

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

    @SerializableMember({
        rdf: {
            predicate: rdfs.domain,
        }
    })
    domain?: IriString;

    @SerializableMember({
        rdf: {
            predicate: rdfs.range,
        }
    })
    range?: IriString;
}
