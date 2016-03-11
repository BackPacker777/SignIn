const express = require('express');
const router = express.Router();
const ProcessData = require('../public/node/ProcessData');

/* GET home page. */
router.get('/', function(req, res, next) {
     res.render('index', { title: 'Express' });
});

router.post('/results', function (req, res) {
     new ProcessData(req.body);
     res.render('results', req.body);
});

module.exports = router;