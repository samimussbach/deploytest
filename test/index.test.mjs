import { expect } from 'chai';
import request from 'supertest';
import app from '../index.js';

describe('GET /', function () {
    it('should return Hello World! This is my PR 6', function (done) {
        request(app)
            .get('/')
            .end((err, res) => {
                if (err) return done(err);
                expect(res.status).to.equal(200);
                expect(res.text).to.equal('Hello World! This is my PR 6');
                done();
            });
    });
});
