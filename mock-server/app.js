var express = require('express');
var app = express();

app.get('/courses', function (req, res) {
  var courses = [];
  var result = null;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  courses = require('./courses.json');

  if(req.query.id) {
    result = courses.filter(function (response) {
      return response.id === +req.query.id;
    })
  }

  res.json(result || courses);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
