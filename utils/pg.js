const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});

client.connect();

exports.executar = (query, parametros, callback) => {
    client.query(query, parametros, (err, res) => {
        if (err) throw err;

        callback(res);

        client.end();
    });
}