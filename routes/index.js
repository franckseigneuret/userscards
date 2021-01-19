var express = require('express');
var request = require('sync-request');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var result = request("GET", "https://jsonplaceholder.typicode.com/users");
  var resultJSON = JSON.parse(result.getBody());
  // console.log(resultJSON)
  res.render('index', { users: resultJSON });
});
router.get('/posts', function(req, res, next) {
  var userLink = `https://jsonplaceholder.typicode.com/comments?postId=${req.query.id}`
  var result = request("GET", userLink);
  var resultJSON = JSON.parse(result.getBody());
  // console.log(resultJSON)
  res.render('posts', { messages: resultJSON });
});

module.exports = router;





