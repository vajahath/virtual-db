/**
 * checks if the key is present in the LevelDB
 * if not, handles it
 */

var lme = require('lme');
var db = require('./levelDB');
var readMissHandler = require('./read-miss-handler');
var lru = require('./lru-interface');

var get = function(key, callback) {
	// try to get the value from localdb
	db.get(key, function(err, value) {
		if (err) {
			if (err.notFound) {
				// read miss occured
				// handle the read-miss
				readMissHandler(key, callback);
			} else {
				// some other error occured
				lme.e('someting went wrong!');
				lme.e(err);
				callback(err);
			}
		} else {
			// data-available
			// give the value to caller and uupdate lru
			lru.use(key);
			callback(null, value);
		}
	});
};

module.exports = get;
