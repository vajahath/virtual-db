var LRU = require('lru-cache');
var lme = require('lme');

var options = {
	max: 5,
	length: function(n, key) {
		return n.length;
	},
	dispose: function(key, n) {
		lme.w("disposing", key, n);
	}
}

var cache = LRU(options);

module.exports = cache;
