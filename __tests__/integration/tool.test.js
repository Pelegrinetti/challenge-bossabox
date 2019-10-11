import request from 'supertest'
import app from '../../src/app'

describe('Tools', () => {
  it('should hello to be World', () => {
    return request(app).get('/').then(response => {
      expect(response.body.hello).toBe('World')
    })
  })
})
