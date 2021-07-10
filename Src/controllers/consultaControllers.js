const mongoose = require('mongoose')
const Consulta = require('../models/consultaSchema')

const criaConsulta = async (req, res)=>{
    const consultas = new consultas({
        _id: mongoose.Schema.Types.ObjectId(),
        nome: req.body.nome,
        dataDeCriação: req.body.dataDeCriação
    })
    
    const consultasJaExiste = await receita.findOne({nome: req.body.nome})
    if(consultaJaExiste) {
        return res.status(409).json({error: "Consulta já cadastrada"})
    
     }
 
     try{
         const novaConsulta = await consultas.save()
         res.status(201).json(novaConsulta)
     }catch (err) {
         res.status(500).json({mensage: err.mensage})
     }
 
 }
 
 
 
 module.exports = {
    criaConsulta 
 }
