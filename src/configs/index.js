import 'dotenv/config'

export default {
  app: {
    port: process.env.PORT || 3000
  },
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  }
}
