const express = require('express')
const router = express.Router()
const controller = require('../controllers/consultaController')

router.post('/', controller.criaConsulta)







module.exports = router