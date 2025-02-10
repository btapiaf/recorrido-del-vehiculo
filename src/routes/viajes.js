const express = require('express')
const router = express.Router()
const viajesControler = require("../controllers/viajes")

router.get('/', viajesControler.getAllViajes)
router.get("/:id", viajesControler.getViajeById)

module.exports = router