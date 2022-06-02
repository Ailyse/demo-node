var varenv = require('dotenv').config();

var mongoPath = process.env.PATH_MONGO;

module.exports = {
    url: mongoPath
  };
