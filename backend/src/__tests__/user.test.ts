import request from 'supertest';
import app from '../app';

describe('GET /', () => {
  it('should return a 401 status and ', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(401);
  });
});
