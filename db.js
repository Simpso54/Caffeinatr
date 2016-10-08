var pg = require('pg');
var conString = "postgres://twoduck:quack@localhost:5432/caffeinatr";
/*
var client = new pg.Client(conString);
client.connect();

exports.makeQuery = function(queryString) {
    let query = client.query(queryString);

    query.on('row', function(row) {
        console.log(row);
    });

    query.on('end', function() {
        client.end();
    });
}
*/
exports.sayHello = function() {
    console.log("Hello!");
}