import 'mocha';
import { expect } from 'chai';
import { SolidController, QuantityValue } from '../../src/';
import { Session } from '@inrupt/solid-client-authn-node';
import { LengthUnit } from '@openhps/core';
import { RDFSerializer } from '@openhps/rdf/serialization';

describe('SolidController', () => {
    const controller: SolidController = new SolidController("test");
    const session: Session = new Session({
        sessionInfo: {
            webId: "https://maximvdw.solidweb.org/profile/card#me",
            sessionId: undefined,
            isLoggedIn: false,
        }
    });

    it('should serialize units', () => {
        const accuracy = new QuantityValue();
        accuracy.numericValue = 10;
        accuracy.unit = LengthUnit.METER;
        const serialized = RDFSerializer.serialize(accuracy);
        expect(Object.keys(serialized.predicates).length).to.equal(3);
    });

    it('should get all positions', (done) => {
        controller.findAllPositions(session, 1000, 20).then(positions => {
            expect(positions.length).to.be.greaterThanOrEqual(2);
            done();
        }).catch(done);
    });
});
