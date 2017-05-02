var expect = require('chai').expect;

var get = require('../src/get-checker');

describe('testing get-checker function', function() {
	it('returns notFound err when an entry is not in db', function(done) {
		get({ something: 'that is not in db' }, function(err, value) {
			expect(value).to.be.undefined;
			expect(err).to.be.not.null;
			expect(err.notFound).to.be.true;
			done();
		});
	});

	// put something in first
	// describe('adding entries and testing...', function(){
	// 	it('puting data for testing get function', function(done){
	// 		put()
	// 	})
	// })

});

//
