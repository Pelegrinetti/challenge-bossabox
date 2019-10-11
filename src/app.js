import express from 'express'
import cors from 'cors'

class App {
  constructor () {
    this.app = express()

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  routes () {
    this.app.get('/', (req, res) => {
      res.send({ hello: 'World' })
    })
  }
}

export default new App().app
