import app from './app'

import configs from './configs'

app.listen(configs.app.port, error => {
  if (error) {
    console.log(`> Error: ${error.message}`)
    process.exit(1)
  }

  console.log(`> Running at ${configs.app.port}`)
})
