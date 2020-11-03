const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
})