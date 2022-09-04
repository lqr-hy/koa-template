import run from "../app";
import request from 'supertest'
import {Server} from "http";

describe('http set', () => {
  let server: Server
  beforeAll(() => {
    server = run(3003)
  })
  it('Get /admin', () => {
    return request(server).get('/admin').expect(200)
  })
  afterAll(() => {
    server.close()
  })
})