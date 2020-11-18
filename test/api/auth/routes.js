const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../../../app');

describe('Testing auth api', function () {
    this.timeout(10000);

    it('should get success true and message ok', done => {
        supertest(app)
            .get('/auth')
            .send({
                token: 'eyJhbGciOiJIUzI1NiJ9.dGVzdA.DHXf950hmhSt_n32J5mKaR5n3d2jxIJzHpJOnBGlm2g'
            })
            .then(
                (response) => {
                    expect(response.statusCode).to.be.equal(200);
                    expect(response.body).to.have.property('success').equal(true);
                    expect(response.body).to.have.property('message').equal('permitido');
                    done()
                }
            )
            .catch(e => {
                done(e)
            })
    })

})









