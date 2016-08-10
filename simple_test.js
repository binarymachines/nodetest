const snapclient = require('./snapclient')
var vows = require('vows'), 
    assert = require('assert')


vows.describe('simpletest') // Create the suite, describing 'subject'
    .addBatch({
	    'when we add two and two': {
		topic: function() { 2 + 2 },
		'we get four': function(topic) {
		    assert.equal(topic, 4); 
		}
	    },
	    'when we talk to the Snap microservice': {
		topic: function() { snapclient.talkToSnap() },
		'we get a hello world string': function( ) {
		    console.log('snap microservice returned: ' + topic)
		    assert.equal(true, true);
		}
	    }	
    }).run();        