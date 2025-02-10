const express = require('express');
const app = express();
const routerViajes = require("./routes/viajes")

app.use(express.json())

app.use('/viajes', routerViajes)

app.listen(3000, () => {
    console.log('Server on port 3000')

})