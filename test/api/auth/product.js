const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../../../app');

describe('Testing products API', function () {
    this.timeout(10000);

    it('should get success true and products', done => {
        supertest(app)
            .get('/auth/products')
            .send({
                token: 'eyJhbGciOiJIUzI1NiJ9.dGVzdA.DHXf950hmhSt_n32J5mKaR5n3d2jxIJzHpJOnBGlm2g'
            })
            .then(
                (response) => {
                    expect(response.statusCode).to.be.equal(200);
                    expect(response.body).to.have.property('success').equal(true);
                    expect(response.body).to.have.property('products');
                    done()
                }
            )
            .catch(e => {
                done(e)
            })
    })

    it('should send a product to be registered', done => {
        supertest(app)
            .post('/auth/products')
            .send({
                token: 'eyJhbGciOiJIUzI1NiJ9.dGVzdA.DHXf950hmhSt_n32J5mKaR5n3d2jxIJzHpJOnBGlm2g',
                title: 'Bermuda',
                price: 10,
                photos: ['nao tem'],
                features: ['preta']
            })
            .then(
                (response) => {
                    expect(response.statusCode).to.be.equal(200);
                    expect(response.body).to.have.property('success').equal(true);
                    done()
                }
            )
            .catch(e => {
                done(e)
            })
    })

    it('should not register a product since price was not sent', done => {
        supertest(app)
            .post('/auth/products')
            .send({
                token: 'eyJhbGciOiJIUzI1NiJ9.dGVzdA.DHXf950hmhSt_n32J5mKaR5n3d2jxIJzHpJOnBGlm2g',
                title: 'Bermuda',
                photos: ['nao tem'],
                features: ['preta']
            })
            .then(
                (response) => {
                    expect(response.statusCode).to.be.equal(200);
                    expect(response.body).to.have.property('success').equal(false);
                    expect(response.body).to.have.property('message').equal('Campo título, características, preço e fotos são obrigatórios');
                    done()
                }
            )
            .catch(e => {
                done(e)
            })
    })

    it('should not register a product since title was not sent', done => {
        supertest(app)
            .post('/auth/products')
            .send({
                token: 'eyJhbGciOiJIUzI1NiJ9.dGVzdA.DHXf950hmhSt_n32J5mKaR5n3d2jxIJzHpJOnBGlm2g',
                price: 10,
                photos: ['nao tem'],
                features: ['preta']
            })
            .then(
                (response) => {
                    expect(response.statusCode).to.be.equal(200);
                    expect(response.body).to.have.property('success').equal(false);
                    expect(response.body).to.have.property('message').equal('Campo título, características, preço e fotos são obrigatórios');
                    done();
                }
            )
            .catch(e => {
                done(e)
            })
    })
    
})









