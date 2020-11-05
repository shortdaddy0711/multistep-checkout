//  db setup
const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/checkout', { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We\'re Connected');
});

const checkoutSchema = new Schema({
  name: String,
  email: String,
  password: String,
  line1: String,
  line2: String,
  city: String,
  state: String,
  shipzip: String,
  cc: String,
  exp: String,
  cvv: String,
  billzip: String
})

const Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports = {
  Checkout,
  db
}

