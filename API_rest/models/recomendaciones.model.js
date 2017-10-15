var validator = require('validator');
var mongoose = require('mongoose');
//var bcrypt = require('bcrypt'); // encriptacion


var recomendacionSchema = mongoose.Schema({
    dia: { type: "Date"},
    descripcion: { type: "String" },
    tipo: { type: "String"},
    titulo: { type: "String"},
    imagen: { type: "String"},
    createdOn:  { type: 'Date', default: Date.NOW},
    modifiedOn: { type: 'Date' },
    deletedOn:  { type: 'Date' }

});

module.exports = mongoose.model('recomendacion', recomendacionSchema);