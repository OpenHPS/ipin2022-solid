import 'mocha';
import { expect } from 'chai';
import { SolidController } from '../../src/';
import { Session } from '@inrupt/solid-client-authn-node';

describe('SolidController', () => {
    const controller: SolidController = new SolidController("test");
    const session: Session = new Session({
        sessionInfo: {
            webId: "https://maximvdw.solidweb.org/profile/card#me",
            sessionId: undefined,
            isLoggedIn: false,
        }
    });

    it('should get all positions', (done) => {
        controller.findAllPositions(session, 1000, 20).then(positions => {
            expect(positions.length).to.be.greaterThanOrEqual(2);
            done();
        }).catch(done);
    });
});
