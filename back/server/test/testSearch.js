'use stricts';

require('dotenv').config();
const chaiHttp = require('chai-http');
const chai = require('chai');
const { expect } = require('chai');

chai.use(chaiHttp);

const url = process.env.BACKEND_URL;

console.log('url', url, '/items?search=test')

// eslint-disable-next-line no-undef
describe('SEARCH: ', () => {
  // eslint-disable-next-line no-undef
  it('API is up', (done) => {
    chai.request(url)
      .get('/')
      .end(function (err, res) {
        expect(res.body).to.have.property('success').to.be.equal(true);
        done();
      });
  });

  // eslint-disable-next-line no-undef
  it('should get items search', (done) => {
    chai.request(url)
      .get('/api/items?q=test')
      .end(function (err, res) {
        expect(res.body).to.have.property('success').to.be.equal(true);
        done();
      });
  });

  // eslint-disable-next-line no-undef
  it('wrong parameters', (done) => {
    chai.request(url)
      .get('/api/items?search=test')
      .end(function (err, res) {
        expect(res.body).to.have.property('success').to.be.equal(false);
        done();
      });
  });
});
