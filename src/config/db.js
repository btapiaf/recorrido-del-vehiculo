const mysql = require('mysql2');
require('dotenv').config()

const dbConfig = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}

const connection = mysql.createPool(dbConfig)
connection.getConnection((err, con) => {
    if (err) {
        console.error('Error connecting to DB:', err)
        return
    }
    console.log("conexion exitosa");
    con.release(); // Liberamos la conexión para otros clientes.
})

module.exports = connection;
