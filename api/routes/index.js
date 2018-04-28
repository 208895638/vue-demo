var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(2222);
  res.render('index', { title: 'Express' });
});
var msg = "我是express的数据";
router.get("/msg",function(req,res,next){
  res.send(msg);
});
module.exports = router;
