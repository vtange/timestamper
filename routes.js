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
		console.log(req.params.something)
        res.render('index.ejs'); // load the index.ejs file
    });
}