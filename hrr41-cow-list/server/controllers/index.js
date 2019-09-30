const models = require('../models');
//get requests

// var db = require('../db');
// module.exports = connection; <= db

var controllers = {
  cows: {
    get: function (req, res) {
      models.get((err, data) => {
        if (err) {
          throw err;
        }
        res.writeHead(200);
        res.end(JSON.stringify(data));
      });
    },
    post: function (req, res) {
      models.post(req.body, (err, data) => {
        if (err) {
          throw err;
        }
        // console.log('what is req.body?', req.body)
        res.writeHead(201);
        res.end();
        // console.log('got milk???');
      });
    }
  }
};
module.exports = controllers;