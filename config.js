const mongoose  = require("mongoose");

module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB || 'mongobd://localhost:27017/tienda',
  
  urlParser: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }

};