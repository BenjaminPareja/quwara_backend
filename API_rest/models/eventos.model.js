var validator = require('validator');
var mongoose = require('mongoose');
//var bcrypt = require('bcrypt'); // encriptacion


var eventoSchema = mongoose.Schema({
    tipo: { type: "String", enum: ['a', 'b', 'c'], default: 'a'},
    descripcion: { type: "String" },
    estado: { type: "String"},
    tag: { type: "String"},
    color: { type: "String"},
    createdOn:  { type: 'Date', default: Date.NOW},
    modifiedOn: { type: 'Date' },
    deletedOn:  { type: 'Date' }

});

module.exports = mongoose.model('evento', eventoSchema);