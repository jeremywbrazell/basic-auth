'use strict';

const server = require('../src/server.js');
const supergoose = require('@code-fellows/supergoose');
const { it } = require('@jest/globals');
const mockRequest = supergoose(server.server);

describe('DATABASE:', () => {
    // it('proof of life test', () => {
    //     expect(true).toBeTruthy();
    // })

    it('should create a new item in the db', async () => {
        const response = await mockRequest.post('/signup').send({ username: 'test', password: '12345' })
        expect(response.status).toBe(201);
        expect(response.body.username).toEqual('test');
    });
    it('should sign in a user', async () => {
        const response = await mockRequest.post('/signin').auth( 'test', '12345' )
        expect(response.status).toBe(200);
        expect(response.body.username).toEqual('test');
    });
    it('if invalid should not send a basic header', async () => {
        const response = await mockRequest.post('/signin').auth( 'user name does not exist', 'user' )
        expect(response.status).toBe(403);
    });


});
