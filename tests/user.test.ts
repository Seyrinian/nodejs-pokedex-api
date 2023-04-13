import request from 'supertest';
import { app } from '../src';
import { prismaMock } from './jest.setup';

describe('User API', () => {
  describe('POST /users', () => {
    it('should create a new user', async () => {
      const createdUser = {};

      expect(response.status).toBe(201);
      expect(response.body).toEqual(createdUser);
    });
  });

  describe('POST /login', () => {
    it('should login a user and return a token', async () => {
      const user = {};
      const token = 'mockedToken';

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        token,
        message: 'Connexion réussie',
      });
    });
  });
});
