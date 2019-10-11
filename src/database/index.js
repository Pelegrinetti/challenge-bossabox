import mongoose from 'mongoose'

import configs from '../configs'

mongoose.connect(configs.db.host, err => {
  if (err) {
    console.log(`> Database error: ${err.message}`)
    process.exit(1)
  }

  console.log('> Connected to database')
})

export default mongoose
