var fs = require('fs');
var { Sequelize } = require('sequelize');
var sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT
});

var db = {
  Sequelize,
  sequelize
};

var loadFiles = () => {
  var _files = [];
  fs.readdirSync(__dirname + '/../models')
    .filter((file) => {
      return file.indexOf('.') != 0 && file != 'index.js';
    })
    .forEach((file) => {
      _files.push(file);
      return _files;
    })
  return _files;
}

var files = null
if (!files) {
  files = loadFiles()
}

files.forEach((file) => {
  var modelName = (file.charAt(0).toUpperCase() + file.slice(1)).replace('.js', '');
  db[modelName] = require(__dirname + '/../models/' + file)(sequelize, Sequelize);
})

module.exports = db;
