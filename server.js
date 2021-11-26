const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send("This is the index page")
})

app.get('/test', (req, res) => {
  res.send("Again, change this part of the code")
})

app.listen(PORT,() => console.log(`Running on port ${PORT}`));
