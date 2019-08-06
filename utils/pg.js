const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});

client.connect(err => {
    if (err) {
        console.error(err.stack);        
    }
});

exports.executar = (query, parametros, callback) => {
    client.query(query, parametros, (err, res) => {
        callback(err, res);
        client.end();
    });
}
