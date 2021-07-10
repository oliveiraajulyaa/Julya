const mongoose = require('mongoose')

const consultaSchema = new mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId , 

    nomeDoPaciente : {
        type: String,
        required: true
    },
    dataDeNascimento : {
        type : Number,
        required: true
    },    
     endereço : {
        type: String,
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

module.exports = mongoose.model('consulta', consultaSchema)