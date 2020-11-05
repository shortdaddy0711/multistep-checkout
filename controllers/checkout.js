const Checkout = require('../server/db');
const db = require('../server/db');
const mongoose = require('mongoose');

module.exports = {
  create: {
    post: (req, res) => {
      const doc = new db.Checkout(req.body);
      doc._id instanceof mongoose.Types.ObjectId;
      doc.save((err, doc) => {
        if (err) { res.send(err); }
        res.json(doc);
      });
    }
  },
  updatesForm1: {
    post: (req, res) => {
      const query = {"_id": req.body.id};
      const update = {
        "$set": {
          "name": req.body.name,
          "email": req.body.email,
          "password": req.body.password
        }
      };
      const options = { returnNewDocument: true };
      db.Checkout.findOneAndUpdate(query, update, options)
      .then(updatedDocument => {
        if(updatedDocument) {
          console.log(`Successfully updated document: ${updatedDocument}.`)
        } else {
          console.log("No document matches the provided query.")
        }
      })
      .catch(err => console.error(`Failed to find and update document: ${err}`))
    }
  },
  updatesForm2: {
    post: (req, res) => {
      const query = {"_id": req.body.id};
      const update = {
        "$set": {
          "line1": req.body.line1,
          "line2": req.body.line2,
          "city": req.body.city,
          "state": req.body.state,
          "shipzip": req.body.shipzip
        }
      };
      const options = { returnNewDocument: true };
      db.Checkout.findOneAndUpdate(query, update, options)
      .then(updatedDocument => {
        if(updatedDocument) {
          console.log(`Successfully updated document: ${updatedDocument}.`)
        } else {
          console.log("No document matches the provided query.")
        }
      })
      .catch(err => console.error(`Failed to find and update document: ${err}`))
    }
  },
  updatesForm3: {
    post: (req, res) => {
      const query = {"_id": req.body.id};
      const update = {
        "$set": {
          "cc": req.body.cc,
          "exp": req.body.exp,
          "cvv": req.body.cvv,
          "billzip": req.body.billzip
        }
      };
      const options = { returnNewDocument: true };
      db.Checkout.findOneAndUpdate(query, update, options)
      .then(updatedDocument => {
        if(updatedDocument) {
          console.log(`Successfully updated document: ${updatedDocument}.`)
        } else {
          console.log("No document matches the provided query.")
        }
      })
      .catch(err => console.error(`Failed to find and update document: ${err}`))
    }
  }
}

