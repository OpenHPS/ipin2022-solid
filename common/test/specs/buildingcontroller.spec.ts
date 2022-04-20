import 'mocha';
import { expect } from 'chai';
import { BuildingController } from '../../src';

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
        controller.findByUID("ca86da51-45d5-4860-a4b4-c6acdddff213").then(space => {
            expect(space.displayName).to.not.be.undefined;
            done();
        }).catch(done);
    });
});
