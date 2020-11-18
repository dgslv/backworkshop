const expect = require('chai').expect;

const {
    connect
} = require('../../db/db');

connect()
    .then(() => {
        describe('Testing user services', function () {
            this.timeout(10000);

            const {
                getUsers,
                getUser,
                addUser
            } = require('../../services/users');

            it('should get users', done => {
                getUsers()
                    .then(
                        (users) => {
                            expect(users).to.be.an('array');
                            done()
                        }
                    )
                    .catch(e => {
                        console.log(e);
                        done(e)
                    })
            })

            it('should save a user', done => {
                addUser({
                    name: 'workshop',
                    password: 'workshop'
                }).then(
                    (user) => {
                        expect(user).to.have.property('name').equal('workshop');
                        expect(user).to.have.property('password').equal('workshop');
                        done();
                    }
                )
                    .catch(e => {
                        console.log(e)
                        done(e)
                    })
            })

            it('should not save a user since name was not passed', done => {
                addUser({
                    password: 'workshop'
                })
                    .then(
                        () => {
                            done()
                        }
                    )
                    .catch(e => {
                        expect(e).to.be.equal('Nome e senha são obrigatórios');
                        done();
                    })
            })

            it('should not save a user since password was not passed', done => {
                addUser({
                    name: 'workshop'
                })
                    .then(
                        () => {
                            done()
                        }
                    )
                    .catch(e => {
                        expect(e).to.be.equal('Nome e senha são obrigatórios');
                        done();
                    })
            })
            
            it('should get a user named workshop with password workshop', done => {
                getUser('5f922afa8ba310deb7984f1e')
                    .then(
                        (user) => {
                            expect(user).to.have.property('name').equal('workshop');
                            expect(user).to.have.property('password').equal('workshop');
                            done()
                        }
                    )
                    .catch(e => {
                        console.log(e);
                        done(e);
                    })
            })
        })
    })