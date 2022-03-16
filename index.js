const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World from Express!')
})

app.get('/about', (req, res) => {
  res.send('Hello World from Expres, by Dylan!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})