const mongoose  = require("mongoose");

module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB || 'mongodb+srv://alexismundo:leviatan2@cluster0.kmry7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  
  urlParser: {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }

};