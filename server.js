const express = require('express')
const app = express()

app.use(express.json())

const db = require('./Src/Data/Database')
db.connect()

//const receita = require('./src/routes/consultaRoutes.routes')


//app.use('/consultas' , consulta)



app.listen(8080, ()=> console.log('Servidor rodando!'))


