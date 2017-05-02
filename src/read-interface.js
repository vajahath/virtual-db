/**
 * checks if the key is present in the LevelDB
 * if not, handles it
 */

var lme = require('lme');
var db = require('./levelDB');
var readMissHandler = require('./read-miss-handler');
var cache = require('./lru');

var get = function(key, callback) {
	// try to get the value from localdb
	db.get(key, function(err, value) {
		if (err) {
			if (err.notFound) {
				// read miss occurred
				// handle the read-miss
				readMissHandler(key, callback);
			} else {
				// some other error occurred
				lme.e('something went wrong!');
				lme.e(err);
				callback(err);
			}
		} else {
			// data-available
			// give the value to caller and update lru
			cache.get(key, true)
			callback(null, value);
		}
	});
};

module.exports = get;
