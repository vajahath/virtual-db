// START DATABASE
var levelup = require('levelup');
var db = levelup('./Illution-VD/Storage', {
	keyEncoding: 'json',
	valueEncoding: 'json'
});

module.exports = db;
