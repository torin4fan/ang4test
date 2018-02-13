const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(db.url, (error, database) => {
  const myAwesomeDB = database.db('hazh');
  if (error) return console.log(error);
  require('./app/routes')(app, myAwesomeDB);
});

app.get('/courses', function (req, res) {
  let courses = [];
  let result = null;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  courses = require('./courses.json');

  if (req.query.id) {
    result = courses.filter(function (response) {
      return response.id === +req.query.id;
    });

    result = result[0];
  }

  res.json(result || courses);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
