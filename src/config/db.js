const mysql = require('mysql2');


const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'vehiculo_distancia'
}
const connection = mysql.createPool(dbConfig)
connection.getConnection((err, con) => {
    if (err) {
        console.error('Error connecting to DB:', err)
        if (connection) con.release()
        return
    }
    console.log("conexion exitosa");
    con.release(); // Liberamos la conexión para otros clientes.
})
// Exportamos la función para que pueda ser utilizada en otros archivos.
module.exports = connection;
