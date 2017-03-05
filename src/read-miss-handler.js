var lme = require('lme');
var lru = require('./lru-interface');

module.exports = function(key, callback) {
	lme.w('reporting from read-miss-handler', key);
	// get data from databse and store it and pass it to callback.
	// update lru
	lru.use(key);
	callback();
};
