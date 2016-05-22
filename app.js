//  Lib permettant de créer un serveur web.
var http = require('http');
var fs = require('fs');
var configurationFile = 'configs/config.json';


var configuration = JSON.parse(
    fs.readFileSync(configurationFile)
);

// req : objet contenant les informations demandées par le client.
// res : objet contenant les informations en retour au client.
var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Server started : '+configuration.appname+" v"+configuration.version);
});
server.listen(3030);

