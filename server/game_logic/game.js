var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var db_url = process.env['MONGO_PORT_27017_TCP'] || 'mongodb://127.0.0.1:27017';
db_url = db_url.replace('tcp', 'mongodb');
db_url += '/mech';
MongoClient.connect(db_url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

function insertDocument(db, callback, id, data) {
  db.collection(data).insertOne(data, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the restaurants collection.");
    callback();
  });
};

exports.join = function() {
  console.log("addPlayer");
};

exports.setup = function() {
  var state = {
    'round': 0,
    'items': ['item1', 'item2', 'item3'],
    'player1': {
      'wins': 0
    },
    'player2': {
      'wins': 0
    }
  };
  return state;
};

exports.run = function(player, code) {
  console.log("run");
};