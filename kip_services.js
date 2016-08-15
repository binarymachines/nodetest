

var mongoose = require('mongoose');


module.exports = {

    MongoDBClient: function(params) {
	this.host = params['host'];
	this.port = params['port'];
	if(this.port === null || this.port === undefined){
	    this.port = 27017;
	}
	this.database = params['database'];
	this.username = params['username'];
	this.password = params['password'];
	this.getURI = function(){
	    return 'mongodb://' + this.username + ':' + this.password + '@' + this.host + ':' + this.port;
	};

	return this;
    }
};
