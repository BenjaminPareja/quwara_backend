var validator = require('validator');
var mongoose = require('mongoose');
//var bcrypt = require('bcrypt'); // encriptacion


var pacienteSchema = mongoose.Schema({
    dni: { type: "String", required: true, unique: true},
    nombre: { type: "String" },
    apellidos: { type: "String" },
    genero: { type: "String",  enum: ['V', 'M'], default: 'V'},
    anemia: { type: "Boolean"},
    telefono: { type: "String"},
    direccion: { type: "String"},
    fecha_nacimiento: { type: 'Date' },
    nro_embarazos: { type: 'Date' },
    estado_embar: { type: "String",  enum: ['emb', 'beb','no_emb']},
    fecha_ultEmbarazo: { type: 'Date' },
    createdOn:  { type: 'Date', default: Date.NOW},
    modifiedOn: { type: 'Date' },
    deletedOn:  { type: 'Date' },


    hijos:  {    type: []    },
    resultados:  {    type: []    }


});

module.exports = mongoose.model('paciente', pacienteSchema);