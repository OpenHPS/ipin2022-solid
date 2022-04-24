import { SerializableArrayMember, SerializableMember, SerializableObject } from '@openhps/core';
import { SerializableNamedNode } from '@openhps/rdf/serialization';
import { rdfs, ssn } from '@openhps/rdf/vocab';
import { Procedure } from './Procedure';
import { Deployment } from './Deployment';

@SerializableObject({
    rdf: {
        type: ssn.System,
    },
})
export class System extends SerializableNamedNode {
    @SerializableMember({
        rdf: {
            predicate: rdfs.label,
            language: 'en',
        },
    })
    label?: string;

    @SerializableMember({
        rdf: {
            predicate: rdfs.comment,
            language: 'en',
        },
    })
    comment?: string;

    @SerializableMember({
        rdf: {
            predicate: ssn.hasDeployment,
            language: 'en',
        },
    })
    deployment?: Deployment;

    @SerializableArrayMember(System, {
        rdf: {
            predicate: ssn.hasSubSystem,
        },
    })
    subSystems?: System[] = [];

    @SerializableArrayMember(Procedure, {
        rdf: {
            predicate: ssn._implements,
        },
    })
    procedures?: Procedure[] = [];
}
