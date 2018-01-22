var express = require('express');
var router = express.Router();

var db = require('../queries');

router.get('/api/event-list', db.getEventList);
router.get('/api/pos-all', db.getPosAll);
router.get('/api/pos-by-event/:id', db.getPosByEvent);
router.get('/api/pos-by-musher/:id', db.getPosByMusher);

module.exports = router;
