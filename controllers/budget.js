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
	},
	findAllDepensesByCategorie : function(categorieDepense, getResults){
		console.log("budget.js : appel findAllDepensesByCategorie");
		console.log("categorieDepense by categorie: "+categorieDepense);
		console.log("ok");
		bdd.findAllDepensesByCategorieBDD(categorieDepense, function(err,results){
			if (err) {
				throw err;
			} else {
				console.log("results : "+results);
				getResults(categorieDepense, results);
			}
				
		});
	},
	findAllCategorieDepenses : function(getResults){
		console.log("budget.js : appel findAllCategorieDepenses");
		bdd.findAllCategorieDepensesBDD(function(err,results){
			if (err) {
				throw err;
			} else {
				getResults(results);
			}
				
		});
	}
}
