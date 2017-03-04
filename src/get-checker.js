/**
 * checks if the key is present in the LevelDB
 * if not, handles it
 */

var lme = require('lme')
var db = require('./levelDB');

var get = function(key, callback) {
	db.get(key, function(err, value) {
		if (err) {
			if (err.notFound) {
				lme.w('db-miss');
			} else {
				lme.e('someting went wrong!');
				lme.e(err);
				callback(err);
			}
		} else {
			callback(null, value);
		}
	});
}

module.exports = get;
