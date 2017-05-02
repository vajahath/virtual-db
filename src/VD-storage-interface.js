// START DATABASE
var levelup = require('levelup');
var db = levelup('./Illusion-VD/Storage', {
	keyEncoding: 'json',
	valueEncoding: 'json'
});

module.exports = db;
