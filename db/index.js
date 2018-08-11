// file to seed database
const mysql = require('mysql');
const { mysqlOptions } = require('./config.js');

const connection = mysql.createConnection(mysqlOptions);

connection.connect((err) => {
  if (err) {
    console.error('failed to connect: ', err.stack);
    return;
  }

  console.log(`connected as id ${connection.threadId}`);
});
