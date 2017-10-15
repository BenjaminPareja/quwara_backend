var Recomendaciones = require('../models/recomendaciones.model');
var mongoose = require('mongoose');
var validator = require('validator');

module.exports = {


    findAll: function(req,res){
        Recomendaciones.find(function (err, eventos) {
            if (err)
                res.send(err);

            res.json(eventos);

        })
    },

    findOne: function(req,res){
        Recomendaciones.find({'_id': req.params.id},function (err, eventos) {
            if (err)
                res.send(err);

            res.json(eventos);

        })
    },

    create: function(req,res){

        console.log(req.body);

            var recomendaciones = new Recomendaciones({
                dia: req.body.dia,
                descripcion: req.body.descripcion,
                tipo: req.body.tipo,
                titulo: req.body.titulo,
                imagen: req.body.imagen,


            });
            recomendaciones.save(function(err) {

                if (err)
                    res.send(err);
                else{
                    res.json({ message: 'eventos  created!' });
                }
            });
    },

    delete: function(req,res){
        Recomendaciones.remove({
            'dni': req.params.dni
        }, function(err, Eventos) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    },

    update: function (req,res) {
        Recomendaciones.findOneAndUpdate({'_id':req.params.id}, req.body ,function (err, eventos) {
            if (err)
                res.send(err);
            else
                res.json({ message: 'Successfully update' });

        })
    }
};
