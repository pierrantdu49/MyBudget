var bdd = require("../models/bdd.js");

module.exports = {
	helloWorld : function() {
		console.log("Hello world !");
	},
	findAllDepenses : function(getResults){
		console.log("budget.js : appel findAllDepenses");
		bdd.findAllDepensesBDD(function(err,results){
			if (err) {
				throw err;
			} else {
				getResults(results);
			}
				
		});
	}
}
