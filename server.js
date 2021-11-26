const express = require('express')
const app = express()
const PORT = 3000
app.get('/', (req, res) => {
  res.send("Hi from Docker again and again")
})

app.listen(PORT,() => console.log(`Running on port ${PORT}`));
