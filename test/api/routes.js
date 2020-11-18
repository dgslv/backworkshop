const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../../app');

describe('Testing routes', function () {
    this.timeout(10000);

    it('should get success true and message ok', done => {
        supertest(app)
            .get('/')
            .then(
                (response) => {
                    expect(response.statusCode).to.be.equal(200);
                    expect(response.body).to.have.property('success').equal(true);
                    expect(response.body).to.have.property('message').equal('ok');
                    done()
                }
            )
            .catch(e => {
                done(e)
            })
    })

})









