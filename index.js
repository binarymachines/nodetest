// index.js

const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

var request = require('request')


app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))


app.get('/', (request, response) => {  
  response.render('home', {
    name: 'John'
  })
})

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
	}

    });
}


talkToSnap();

//app.listen(3000)
