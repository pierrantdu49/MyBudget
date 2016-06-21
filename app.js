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

app.get('/findAllDepenses', function (req, res) {
	var depenses = budget.findAllDepenses();
	console.log(depenses);
  	res.json(depenses);
});

app.get('/infos', function (req, res) {
  res.send('Application MyBudget v'+configuration.version);
});

// On lance le serveur.
app.listen(3030, function () {
  console.log('Server is running ...');
});
