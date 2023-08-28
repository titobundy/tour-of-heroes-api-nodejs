function evaluating (req, res) {
    let operation = req.query.operation
    eval(`product_${operation}()`) // Noncompliant
    res.send("OK")
}

const { execSync } = require('child_process')

cmd = req.query.cmd
execSync(cmd) // Noncompliant

var mysql = require('mysql');

var connection = mysql.createConnection(
{
  host:'localhost',
  user: "admin",
  database: "project",
  password: "mypassword", // sensitive
  multipleStatements: true
});

connection.connect();

const crypto = require('crypto');

crypto.createCipheriv("DES", key, iv); // Noncompliant

const Formidable = require('formidable');

const form          = new Formidable(); // Noncompliant
form.uploadDir      = "/tmp/";
form.keepExtensions = true;

