var Paciente = require('../models/paciente.model');
var mongoose = require('mongoose');
var validator = require('validator');

module.exports = {

    
    findAll: function(req,res){
        Paciente.find(function (err, pacientes) {
            if (err)
                res.send(err);

            res.json(pacientes);

        })
    },

    findOne: function(req,res){
        Paciente.find({'dni': req.params.dni},function (err, pacientes) {
            if (err)
                res.send(err);

            res.json(pacientes);

        })
    },

    create: function(req,res){

        console.log(req.body);

        if(req.body.estado_embar == "beb"){
            console.log('entreeeeee beb');
            var pacienteBebe = new Paciente({
                fecha_nacimiento: req.body.fecha_nacimiento,
                dni: req.body.dniBebe,
            });
            pacienteBebe.save(function(err) {

                if (err)
                    res.send(err);
                else{
                }

            });
            var pacienteMadre = new Paciente({
                nombre: req.body.nombre,
                genero: req.body.genero,
                telefono: req.body.telefono,
                nro_embarazos: req.body.nro_embarazos,
                estado_embar: req.body.estado_embar,
                dni: req.body.dniMama,
                hijos: [{id_paciente: req.body.dniBebe}]

            });
            pacienteMadre.save(function(err) {

                if (err)
                    res.send(err);
                else{
                    res.json({ message: 'pacientes  created!' });

                }

            });
        }
        else if(req.body.estado_embar == "emb"){
            console.log('entreeeeee emb');
           var fecha = (req.body.semanasGestacion/4)
            fecha = Date.now()-fecha;
           console.log('fecha'+ fecha);

            var pacienteMadre = new Paciente({
                fecha_ultEmbarazo: req.body.fecha_ultEmbarazo,
                nombre: req.body.nombre,
                genero: req.body.genero,
                telefono: req.body.telefono,
                nro_embarazos: req.body.nro_embarazos,
                estado_embar: req.body.estado_embar,
                dni: req.body.dniMama,
                hijos: [{id_paciente: req.body.dniBebe}]

            });
            pacienteMadre.save(function(err) {

                if (err)
                    res.send(err);
                else{
                    res.json({ message: 'pacientes  created!' });

                }

            });
        }
        else{
            console.log("nigga");
        }


        //}
       // else
          //  res.json({ message: 'Campos invalidos' });

    },

    delete: function(req,res){
        Paciente.remove({
            'dni': req.params.dni
        }, function(err, paciente) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    },

    update: function (req,res) {
        Paciente.findOneAndUpdate({'dni':req.params.dni}, req.body ,function (err, pacientes) {
            if (err)
                res.send(err);
            else
                res.json({ message: 'Successfully update' });

        })
    }
};



