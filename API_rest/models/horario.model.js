var validator = require('validator');
var mongoose = require('mongoose');
//var bcrypt = require('bcrypt'); // encriptacion


var horarioSchema = mongoose.Schema({
    dni: { type: "Date"},
    evento_id: {type: "String" },
    fecha: { type: 'Date' },
    descripcion: { type: "String" },
    repeticion:{
    	tipo:{ type: "String" },
    	fecha_origen:{ type: 'Date' },
    	dia:{ type: "String",  enum: ['L', 'M','Mi','J','V','S','D']},
    	fecha_origen:{ type: 'Date' },
    },
    createdOn:  { type: 'Date', default: Date.NOW},
    modifiedOn: { type: 'Date' },
    deletedOn:  { type: 'Date' }

});

module.exports = mongoose.model('horario', horarioSchema);