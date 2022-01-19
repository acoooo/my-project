const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send("Home page from Docker")
})

app.get('/test', (req, res) => {
  res.send("Test page from Docker")
})

app.listen(PORT,() => console.log(`Running on port ${PORT}`));
