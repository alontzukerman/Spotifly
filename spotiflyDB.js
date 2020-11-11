const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
    database: 'spotifly',
    multipleStatements: true
});

db.connect(error => {
    if(error) throw error ; 
    console.log("Connected !")
});

module.exports = db ;