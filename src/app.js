const express = require('express');
const pool = require('./config/db');

const app = express();
app.get('/viajes', async (req, res) => {
    try {
        const [results, field] = await pool.promise().query("select * from conductor")
        res.json(results)
        return results
    } catch (error) {
        error.message(error.message)
    }

})

app.listen(3000, () => {
    console.log('Server on port 3000')

})