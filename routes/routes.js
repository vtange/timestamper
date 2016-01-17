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
		var allNums = /^\d+$/;
		var regMonths = /(January|February|March|April|May|June|July|August|September|October|November|December)/i;
		var months = ['January ','February ','March ','April ','May ','June ','July ','August ','September ','October ','November ','December '];
		var json = {
			"unix":null,
			"natural":null
		};
		if(allNums.test(query)){									//query is all numbers
			var date = new Date(query*1000);
			var year = date.getFullYear();
			var month = months[date.getMonth()];
			var date = date.getDate();
			// Will display time in 10:30:23 format
			var natural = month + date + ', ' + year;
			json = {
				"unix":parseInt(query,10),
				"natural":natural
			}
		}
		else if(query.search(regMonths)!==-1){						//query has a month
			var date = new Date(query)/1000;
			json = {
				"unix":date,
				"natural":query
			}
		}
        res.send(json); // load the index.ejs file
    });
}