'use stricts';

require('dotenv').config();
const chaiHttp = require('chai-http');
const chai = require('chai');
const { expect } = require('chai');

chai.use(chaiHttp);

const url = process.env.BACKEND_URL;

// eslint-disable-next-line no-undef
describe('ITEM: ', () => {
  // eslint-disable-next-line no-undef
  it('should get item', (done) => {
    chai.request(url)
      .get('/api/items/MLA850382509')
      .end(function (err, res) {
        expect(res.body).to.have.property('success').to.be.equal(true);
        done();
      });
  });

  // eslint-disable-next-line no-undef
  it('item not found', (done) => {
    chai.request(url)
      .get('/api/items/AAAAAAAA')
      .end(function (err, res) {
        expect(res.body).to.have.property('success').to.be.equal(false);
        done();
      });
  });
});
