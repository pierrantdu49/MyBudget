var fs = require('fs');
var configurationFile = 'configs/config.json';
var mysql = require("mysql");


// On récupère les données de configuration du fichier config.json
var configuration = JSON.parse(
    fs.readFileSync(configurationFile)
);

//Initialisation de la connexion à la base de données
var connection = mysql.createConnection({
	host     : configuration.db_host,
	user     : configuration.db_user,
	password : configuration.db_password,
	database : configuration.db_name
});

//Connexion à la base de données
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... ");
    console.log("Host : "+configuration.db_host);
    console.log("Database :"+configuration.db_name);    
} else {
    console.log("Error connecting database ... "); 
    console.log("Check database information");    
}
});


var query = "";

module.exports = {
    findAllDepensesBDD : function(){
        query = "SELECT * FROM depense";
        connection.query(query,function(err,rows){
            if(err) throw err;
            console.log('rows :'+rows);
        });
        console.log("rows bdd : "+rows);
        return rows;
    }
}


