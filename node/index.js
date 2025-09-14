const express = require('express');
const app = express();
const port = 3000;

const config = {
    host: 'db',
    database: 'nodedb',
    port: '3306',
    user: 'root',
    password: 'root',
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

connection.connect((err) => {

  if (err) {

    console.error('Error connecting to MySQL:', err);

    return;
  }

  console.log('Connected to MySQL');
});

const create = `CREATE TABLE IF NOT EXISTS PEOPLE (ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY, NAME VARCHAR(255))`;
const insert = `INSERT INTO PEOPLE(NAME) values('André')`;

connection.query(create, (err, result) => {

  if (err) {

    console.error('Error creating table:', err);

    return;
  }

  console.log('Table created or already exists!');
});

connection.query(insert, (err, result) => {

  if (err) {

    console.error('Error creating table:', err);

    return;
  }

  console.log('Error on data insert!');
});

app.get('/', (req, res) => {

    const sql = 'SELECT NAME FROM PEOPLE';

    connection.query(sql, (err, results) => {

        if (err) {

            console.error('Error executing query:', err);

            res.status(500).send('Database query failed!');

            return;
        }

        let html = '<h1>Full Cycle Rocks!</h1>';

        html += '<ul>';

        results.forEach(result => {
            html += `<li>${JSON.stringify(result)}</li>`;
        });

        html += '</ul>';

        res.send(html);
    });
    
    connection.end();
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port);
})