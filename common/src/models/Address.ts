import { SerializableMember, SerializableObject } from '@openhps/core';
import { vcard } from '@openhps/rdf/vocab';

@SerializableObject({
    rdf: {
        type: vcard.Address,
    },
})
export class Address {
    @SerializableMember({
        rdf: {
            predicate: vcard.street_address,
        },
    })
    street?: string;

    @SerializableMember({
        rdf: {
            predicate: vcard.country_name,
        },
    })
    country?: string;
}
