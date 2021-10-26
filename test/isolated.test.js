'use strict';

const assert = require('assert');
const Koa = require('koa');
const request = require('supertest');
const isolated = require('../');

describe('isolated.test.js', function () {
    const app = new Koa();
    app.use(isolated());
    app.use(function (ctx) {
        ctx.body = { foo: 'bar' };
    });

    it('should has the header `Cross-Origin-Opener-Policy` valued `same-origin` and `Cross-Origin-Embedder-Policy` valued `require-corp`', function (done) {
        request(app.listen())
            .get('/')
            .expect('Cross-Origin-Opener-Policy', 'same-origin')
            .expect('Cross-Origin-Embedder-Policy', 'require-corp')
            .expect({ foo: 'bar' })
            .expect(200, done);
    });
});
