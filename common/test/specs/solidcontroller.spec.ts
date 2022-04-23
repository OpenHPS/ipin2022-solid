import 'mocha';
import { expect } from 'chai';
import { SolidController, QuantityValue, BASE_URI } from '../../src/';
import { Session } from '@inrupt/solid-client-authn-node';
import { LengthUnit } from '@openhps/core';
import { RDFSerializer, IriString } from '@openhps/rdf/serialization';

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
    
    it('should get all positions of qrscanner', (done) => {
        controller.findAllPositions(session, 1000, 20, BASE_URI + "qrscanner_checkin" as IriString).then(positions => {
            expect(positions.length).to.be.greaterThanOrEqual(1);
            positions.forEach(position => {
                expect(position.procedure.label).to.equal("QR-scanner Check-in");
            });
            done();
        }).catch(done);
    });

    // it('should get all positions of geolocationapi', (done) => {
    //     controller.findAllPositions(session, 1000, 20, BASE_URI + "geolocationapi" as IriString).then(positions => {
    //         expect(positions.length).to.be.greaterThanOrEqual(1);
    //         positions.forEach(position => {
    //             expect(position.procedure.label).to.not.be.undefined;
    //         });
    //         done();
    //     }).catch(done);
    // });

    it('should get all positions of a specific array of procedures', (done) => {
        controller.findAllPositions(session, 1000, 20, [
            BASE_URI + "qrscanner_checkin" as IriString,
            BASE_URI + "geolocationapi" as IriString
        ]).then(positions => {
            expect(positions.length).to.be.greaterThanOrEqual(3);
            done();
        }).catch(done);
    });

    it('shoud get 1 position fast', (done) => {
        const PROCEDURE_CHECK_IN = BASE_URI + "qrscanner_checkin" as IriString;
        const PROCEDURE_CHECK_OUT = BASE_URI + "qrscanner_checkout" as IriString;
        controller.findAllPositions(session, undefined, 1, [
            PROCEDURE_CHECK_IN,
            PROCEDURE_CHECK_OUT
        ]).then(positions => {
            expect(positions.length).to.be.greaterThanOrEqual(1);
            done();
        }).catch(done);
        
    });
    
    it('should get all velocities', (done) => {
        controller.findAllVelocities(session, 20).then(velocities => {
            expect(velocities.length).to.be.greaterThanOrEqual(2);
            done();
        }).catch(done);
    });
    
    it('should get all orientations', (done) => {
        controller.findAllOrientations(session, 20).then(orientations => {
            expect(orientations.length).to.be.greaterThanOrEqual(2);
            done();
        }).catch(done);
    });

});
