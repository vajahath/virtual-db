var lme = require('lme');
var cache = require('./lru');

module.exports = function(key, callback) {
	lme.w('reporting from read-miss-handler', key);
	// get data from databse and store it and pass it to callback.
	// update lru
	lru.use(key, true);
	callback();
};
