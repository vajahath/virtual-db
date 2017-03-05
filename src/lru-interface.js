/**
 * implementing lru in leveldb
 */
var lme = require('lme');

// START LRU-info STORAGE DATABASE
var levelup = require('levelup');
var lruDB = levelup('./Illution-VD/Replacement-info', {
	keyEncoding: 'json',
	valueEncoding: 'json'
});

var lru = {};

// mark this key as used
lru.use = function(key) {
	lme.w(key, 'used once');
};

// peek: returns the next item going to be removed
lru.peek = function() {
	lme.i('peek: returns the next item going to be removed');
	return;
};

// returns if the cache has reached its limit.
lru.maxSizeReached = function() {
	return;
};

// backup the entry to database
lru.writeBack = function(entry) {
	// store to db
};

// free up least used n entries
lru.free = function(n) {
	for (var i = 0; i < n; i++) {
		var entry = lru.peek();
		if (entry.dirty) {
			lru.writeBack(entry);
		}
		// delete entry here
	}
};

lru.add = function(key) {
	// check if the max size is reached or not
	if (lru.maxSizeReached()) {
		lru.free(1);
	}
	// add the key here
};
