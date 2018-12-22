var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', (req, res, next) => {
    res.send('hello world');
});

router.get('/form', (req, res, next) => {
  res.render('form');
});

router.post('/formdata', (req, res, next) => {
    res.render('formdata', {data: req.body});
});

router.post('/jsondata', (req, res, next) => {
    console.log(req.body);
    res.render('jsondata', {data: req.body});
});


module.exports = router;
