import 'mocha';
import { expect } from 'chai';
import { BuildingController } from '../../src';
import { building } from '../../src/models/Spaces';
import { GeographicalPosition } from '@openhps/core';

describe('BuildingController', () => {
    const controller: BuildingController = new BuildingController();

    it('should initialize', (done) => {
        controller.initialize().then(() => {
            return controller.findAll();
        }).then(spaces => {
            expect(spaces.length).to.be.greaterThan(5);
            done();
        }).catch(done);
    });

    it('should find by UID', (done) => {
        controller.findByUID("deployment_pl9_3_lobby_1").then(space => {
            expect(space.displayName).to.not.be.undefined;
            done();
        }).catch(done);
    });
    
    it('should convert the position of a space to geographical coordinates', (done) => {
        controller.findByUID("deployment_pl9_3_lobby_1").then(space => {
            const position = space.toPosition();
            const geoPosition: GeographicalPosition = building.transform(position);
            expect(geoPosition.altitude).to.be.greaterThan(80);
            const geoPosition2: GeographicalPosition = controller.getGeographicalPosition(space);
            expect(geoPosition2.altitude).to.be.greaterThan(80);
            done();
        }).catch(done);
    });
});
