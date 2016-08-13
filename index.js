// index.js:
// test harness for updated dev practices at Kip
//
//
const snapclient = require('./snapclient.js')

var winston = require('winston');
var yaml = require('js-yaml');
var fs = require('fs');

// get the command line arguments
var argv = require('minimist')(process.argv.slice(2));

// process command-line args
var initFilename = argv['config'];
if(initFilename === null || initFilename === undefined){
    console.log('--config parameter not found. Please invoke this script using --config=<config_filename>.');
    process.exit(-1);
}

var yamlDoc;
try {
    yamlDoc = yaml.safeLoad(fs.readFileSync(initFilename, 'utf8'));
}
catch(err){
    console.log(err);
}

// initialize logging
//
const loggingTransports = yamlDoc['globals']['log_transports'];
var logger = new(winston.Logger)({
    transports: loggingTransports.map(
	function(currentVal){
	    return new (eval(currentVal['type']))(currentVal);
	}
    )
});

logger.debug('Hello World YET AGAIN from Kip logging!');
logger.debug('Debug mode = ' + yamlDoc['globals']['debug']);
logger.debug('Service will listen on port ' + yamlDoc['globals']['port'])

//snapclient.talkToSnap();



