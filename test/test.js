// simple test using Mocha
const snapclient = require('../snapclient')


var assert = require('assert');
var expect = require('chai').expect;

describe('the sum of', function() {
  describe('2 and 2', function() {
    it('should return 4', function() {
	assert.equal(2+2, 4);
    });
  });
});


describe('when we call the Snap microservice', function(){
    describe('the endpoint /user/<id>', function() {
	var jsondoc = snapclient.talkToSnap();	
	it('should return something', function(done) {	    
	    expect(jsondoc).to.exist;
	    done();
	});
    });
});
