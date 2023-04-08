//Conectar com o banco de dandos usando node.js

const mysql = require('mysql'); //informa a biblioteca mysql

//Configura a conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'padrao'
});

//Abre a conexão
connection.connect();

//Comando SQL a ser utilizado:
connection.query("INSERT INTO registro (username,password,email) VALUES('rtqwtqwtqwas','oqwitjqwoitjwq','qwoirkqwoiw')", function (error, results, fields) {
  if (error) throw error;
  console.log('O resultado é: ', results);
});

//Encerra conexão
connection.end();
