var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var load = require('express-load');



module.exports = function(){
	var app = express();

	app.set('port', (process.env.PORT || 5000));
	// view engine setup
	app.set('views', './app/views');
	app.set('view engine', 'jade');
   
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


	// uncomment after placing your favicon in /public
	//app.use(favicon(__dirname + '/public/favicon.ico'));
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(express.static('public'));

	load('models', {cwd: 'app'})
	    .then('controllers')
	    //.then('routes/auth.js')
	    .then('routes')
	    .into(app);

	  app.get('*', function(req, res) {
	     res.status(404).render('404');
	  });

	  return app;
}