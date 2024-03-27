import request from 'supertest'
import { app } from './app'

test('[e2e] Login', async () => {
  const response = await request(app)
    .post('/auth')
    .send({ login: 'Admin',pass:'102030' })

  console.log('Resposta:', response)  
  expect(response.status).toBe(201);
  expect(response.body.error).toBeFalsy();
})

