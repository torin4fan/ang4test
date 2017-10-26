var express = require('express');
var app = express();

app.get('/courses', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.json([
    {
      "id": 1,
      "name": "Video course 1",
      "duration": 358,
      "date": 2312312,
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam dolor dolorem facilis provident quam similique sunt ullam vero! Reprehenderit."
    },
    {
      "id": 2,
      "name": "Video course 2",
      "duration": 421,
      "date": 32123,
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam dolor dolorem facilis provident quam similique sunt ullam vero! Reprehenderit."
    },
    {
      "id": 3,
      "name": "Video course 4",
      "duration": 42132,
      "date": 423123232,
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam dolor dolorem facilis provident quam similique sunt ullam vero! Reprehenderit."
    }
  ]);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
