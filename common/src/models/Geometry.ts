import { SerializableMember, SerializableObject } from "@openhps/core";
import { ogc } from "@openhps/rdf/vocab";
import { QuantityValue } from "./QuantityValue";

@SerializableObject({
    rdf: {
        type: ogc.Geometry,
    }
})
export abstract class Geometry {
    @SerializableMember({
        rdf: {
            predicate: ogc.hasSpatialAccuracy
        }
    })
    spatialAccuracy?: QuantityValue;
}
