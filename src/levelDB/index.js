// START DATABASE
var levelup = require('levelup');
var db = levelup('./db', {
	keyEncoding: 'json',
	valueEncoding: 'json'
});

module.exports = db;
