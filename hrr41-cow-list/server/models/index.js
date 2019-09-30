var db = require('../db');
// module.exports = connection; <= db
// CREATE TABLE cows(
//   /* Describe your table here.*/
//   id INT NOT NULL AUTO_INCREMENT,
//   name VARCHAR(18) NOT NULL UNIQUE,
//   description VARCHAR(100) NOT NULL,
//   PRIMARY KEY (id)
// );

//create a variable named models to hold the post and get function
//get : callback
//db.query(insert gibberish, )

var models = {
  get: function (callback) {
    var queryString = 'SELECT name, description FROM cows';
    db.query(queryString, function (error, results, fields) {
      if (error) {
        throw error;
      }
      callback(null, results);
    });
  },
  post: function (data, callback) {
    var queryString = 'INSERT INTO cows (name, description) VALUES (?, ?)';
    var post = [data.name, data.description];
    db.query(queryString, post, function (error, results, fields) {
      if (error) {
        throw error;
      }
      callback(null, results);
    });
  }
};

module.exports = models;




