    var express = require('express');
    var path = require('path');
    
    var app = express();

	//let Heroku/other host set port, else default 3000
	app.set('port', (process.env.PORT || 3000));
    //use static middleware in express to load static page directory
    app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});