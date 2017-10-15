var Eventos = require('../models/eventos.model');
var mongoose = require('mongoose');
var validator = require('validator');

module.exports = {


    findAll: function(req,res){
        Eventos.find(function (err, eventos) {
            if (err)
                res.send(err);

            res.json(eventos);

        })
    },

    findOne: function(req,res){
        Eventos.find({'_id': req.params.id},function (err, eventos) {
            if (err)
                res.send(err);

            res.json(eventos);

        })
    },

    create: function(req,res){

        console.log(req.body);

            var evento = new Eventos({
                tipo: req.body.tipo,
                descripcion: req.body.descripcion,
                estado: req.body.estado,
                tag: req.body.tag,
                color: req.body.color
            });
            evento.save(function(err) {

                if (err)
                    res.send(err);
                else{
                    res.json({ message: 'eventos  created!' });
                }
            });
    },

    delete: function(req,res){
        Eventos.remove({
            'dni': req.params.dni
        }, function(err, Eventos) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    },

    update: function (req,res) {
        Eventos.findOneAndUpdate({'dni':req.params.dni}, req.body ,function (err, eventos) {
            if (err)
                res.send(err);
            else
                res.json({ message: 'Successfully update' });

        })
    }
};
