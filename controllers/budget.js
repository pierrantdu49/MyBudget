var bdd = require("../models/bdd.js");

module.exports = {
	helloWorld : function() {
		console.log("Hello world !");
	},
	findAllDepenses : function(){
		console.log("budget.js : appel findAllDepenses");
		var rows = bdd.findAllDepensesBDD();
		console.log("rows budget : "+rows);
		return rows;
	}
}
