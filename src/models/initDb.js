const Modelo = require("../controllers/creacionDeTablas")

const initDatabase = async () => {
    try {
        console.log("iniciando la base de datos");
        await Modelo.createTable();

        console.log("Base de datos inicializada correctamente");
        process.exit()
    }
    catch (error) {
        console.log("error en inicializar: ", error);
        process.exit(1)


    }
}


initDatabase()