const connection = require('../config/db');

const viajesControler = {
    getAllViajes: (req, res) => {
        connection.query('SELECT * FROM viaje', (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).send('Error en la base de datos');
                return;
            }
            res.status(201).json(results)
        });
    },
    getViajeById: (req, res) => {
        const { id } = req.params

        connection.query("select * from viaje where ID_viaje = ?", id, (err, results) => {

            if (err) {
                console.log(err);
                res.status(500).send('Error en la base de datos');
                return;
            }

            if (results.length === 0) {
                res.status(404).json({ err: 'Usuario no encontrado' });
                return;
            }
            res.status(201).json(results)
        })
    },

    createViaje: (req, res) => {
        const { id } = req.params

        connection.query("select * from viaje where ID_viaje = ?", id, (err, results) => {

            if (err) {
                console.log(err);
                res.status(500).send('Error en la base de datos');
                return;
            }

            if (results.length === 0) {
                res.status(404).json({ err: 'Usuario no encontrado' });
                return;
            }
            res.status(201).json(results)
        })
    }
}

module.exports = viajesControler;
