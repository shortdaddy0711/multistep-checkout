// Import express
const express = require('express');
const path = require('path');

// Middleware
const parser = require('body-parser');

// Create our app
const app = express();

//  Create a port variable
const PORT = 3000;

//  2. Implement middleware with use method and run express static
app.use(express.static('public'))
app.use(parser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
})