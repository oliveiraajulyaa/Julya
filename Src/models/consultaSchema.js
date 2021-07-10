const mongoose = require('mongoose')

const consultaSchema = new mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId , 

    nomeDoPaciente : {
        Type: String,
        required: true
    },
    dataDeNascimento : {
        Type : Number,
        required: true
    },    
     endereço : {
        Type: String,
        required: true
    },
    queixa : {
        type: String,
        required: true,
    },
    dataDeCriação : {
        type: Date,
        required: true,
        default: new Date
    }
    
})

module.exports = mongoose.model('consulta, consultaSchema')