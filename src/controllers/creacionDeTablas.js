const db = require("../config/db")

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class Modelo {

    static async createTable() {
        const sql = `
-- Crear la tabla Combustible
CREATE TABLE IF NOT EXISTS Combustible (
    ID_Combustible INT AUTO_INCREMENT PRIMARY KEY,
    ID_Vehiculo INT,
    Fecha DATE NOT NULL,
    Litros DECIMAL(10, 2) NOT NULL,
    Costo_Por_Litro DECIMAL(10, 2) NOT NULL,
    Costo_Total DECIMAL(10, 2) GENERATED ALWAYS AS (Litros * Costo_Por_Litro) STORED,
    Kilometraje_Actual DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (ID_Vehiculo) REFERENCES Vehiculo(ID_Vehiculo) ON DELETE CASCADE
);`;

        await db.query(sql)
    }
}

module.exports = Modelo