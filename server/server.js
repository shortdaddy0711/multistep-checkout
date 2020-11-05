// Import express
const express = require('express');
const path = require('path');

// Import Middleware
const parser = require('body-parser');

// Import Controllers
const controllers = require('../controllers/checkout')

// Create our app
const app = express();

//  Create a port variable
const PORT = 3000;

// Implement middleware
app.use(express.static('public'))
app.use(parser.json());

app.get('/account', (req, res) => {
  let data = req.body;
  res.json(data);
})

app.post('/create', controllers.create.post);
app.post('/updatesForm1', controllers.updatesForm1.post);
app.post('/updatesForm2', controllers.updatesForm2.post);
app.post('/updatesForm3', controllers.updatesForm3.post);


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
})