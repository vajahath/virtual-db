// mocking cloud db
const cloudDB = {
	key0: {
		name: 'key0',
		age: 45
	},
	key1: {
		name: 'key0',
		age: 45
	},
	key2: {
		name: 'key0',
		age: 45
	},
	key3: {
		name: 'key0',
		age: 45
	},
	key4: {
		name: 'key0',
		age: 45
	},
	key5: {
		name: 'key0',
		age: 45
	},
}

function getFromCloud(key) {
	lme.w('Cloud Hit');
	return cloudDB[key];
}

module.exports = { getFromCloud };
