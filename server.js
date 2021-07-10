const express = require('express')
const app = express()

app.use(express.json())

const db = require('./src/controllers/consultaControllers')
db.connect()

//const receita = require('./src/routes/consultaRoutes.routes')


//app.use('/consultas' , consulta)



app.listen(3333, ()=> console.log('Servidor rodando!'))


