    var express = require('express');
    var path = require('path');
    var morgan       = require('morgan');
	var cookieParser = require('cookie-parser');
	var bodyParser   = require('body-parser');

    var app = express();

    //use static middleware in express to load static page directory
    app.use(express.static(path.join(__dirname, 'public')));

//let Heroku/other host set port, else default 3000, and then listen
var port     = process.env.PORT || 3000;
app.listen(port);
console.log('The magic happens on port ' + port);