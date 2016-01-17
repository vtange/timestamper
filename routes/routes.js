// routes.js
module.exports = function(app) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
		console.log("got '/'")
        res.render('index.ejs'); // load the index.ejs file
    });
	app.get('/:something', function(req, res) {
		var query = req.params.something;
		var reg = /^\d+$/;
		var json = {}
		if(reg.test(query)){	//query is all numbers
			json = {
				"unix":query,
				"natural":"notime"
			}
		}
		else{						//query is not all numbers
			json = {
				"unix":0,
				"natural":query
			}
		}
        res.send(json); // load the index.ejs file
    });
}