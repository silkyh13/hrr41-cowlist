var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/cows', controller.cows.get);

router.post('/cows', controller.cows.post);

router.delete('/cows', controller.cows.delete);
router.put('/cows', controller.cows.put);
module.exports = router;

