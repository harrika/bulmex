
const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'static')));
var {books, fruit} = require("./data");

app.get('/', function(req,res){
	res.render('p1');
});

app.get('/page2', function(req,res){
	res.render('p2');
});

app.get('/page3', function(req,res){
	res.render('p3', {fruit: fruit} );
});

app.get('/page4', function(req,res){
	res.render('p4', {books: books} );
});

app.listen(4000, function(){
	console.log('express server is ready @ port:4000');
});
