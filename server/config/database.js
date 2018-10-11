const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const jsFileReg = new RegExp('\\.js$', 'i');
const modelsPath = path.resolve('server', 'models');

// connect to mongodb
mongoose.connect(
  'mongodb://localhost:27017/notes',
  { useNewUrlParser: true }
)
mongoose.connection.on('connected', () => {console.log('Mongo DB connected')});

// require all the models for the app
fs.readdirSync(modelsPath).forEach( file => {
  if ( jsFileReg.test(file) ) {
    require(path.join(modelsPath, file));
  }
});
