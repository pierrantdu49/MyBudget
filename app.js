//  Lib permettant de créer un serveur web.
var http = require('http');
var fs = require('fs');
var express = require("express");
var mysql = require("mysql");
var configurationFile = 'configs/config.json';

// On récupère les données de configuration du fichier config.json .
var configuration = JSON.parse(
    fs.readFileSync(configurationFile)
);

var app = express();

var budget = require("./controllers/budget.js");

// req : objet contenant les informations demandées par le client.
// res : objet contenant les informations en retour au client.
app.get('/', function (req, res) {
  res.send('Application MyBudget');
});

app.get('/test', function (req, res) {
	budget.helloWorld();
  res.send('Application MyBudget');
});

// Fonction permettant de récupérer la liste de toutes les dépenses confondues.
app.get('/findAllDepenses', function (req, res) {
	var depenses = budget.findAllDepenses(function(results){
		res.json(results);
	});
});

// Fonction permettant de récupérer la liste de toutes les dépenses par catégorie.
app.get('/findAllDepensesByCategorie/:categorieDepense', function (req, res) {
	console.log("categorie : "+req.params.categorieDepense);
	var categorieDepense = req.params.categorieDepense;
	var depenses = budget.findAllDepensesByCategorie(categorieDepense, function(categorieDepense,results){
		res.json(results);
	});
});

// Fonction permettant de récupérer la liste de toutes les catégories de dépenses confondues.
app.get('/findAllCategorieDepenses', function (req, res) {
	var depenses = budget.findAllCategorieDepenses(function(results){
		res.json(results);
	});
});

app.get('/infos', function (req, res) {
  res.send('Application MyBudget v'+configuration.version);
});

// On lance le serveur.
app.listen(3030, function () {
  console.log('Server is running ...');
});
