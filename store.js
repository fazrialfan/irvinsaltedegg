const mongoose = require('mongoose');
// const url = 'mongodb://localhost:27017/mydata';
const url = 'mongodb://demo:demo12345@ds159574.mlab.com:59574/irvinsaltedegg';
mongoose.connect(url);
mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database Connected')
});

module.exports = mongoose;