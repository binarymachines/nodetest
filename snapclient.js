
const path = require('path')
var request = require('request')



function talkToSnap(){

    request({
        uri: 'http://localhost:5000/user/1',
        method: 'GET',
        body: ''
    }, function(error, response, body){
        if(error){
            console.log(error);
        }
        else{
            console.log(response.statusCode, body);
            return body
        }

    });
}

module.exports.talkToSnap = talkToSnap;
