var paciente = require('../controllers/paciente.controller');
var evento = require('../controllers/eventos.controller');
var recomendacion = require('../controllers/recomendaciones.controller');
var express    = require('express');
var router = express.Router();

// User routes
    router.get('/paciente', paciente.findAll);
    router.get('/paciente/:dni', paciente.findOne);
    router.post('/paciente', paciente.create);
    router.put('/paciente/:dni', paciente.update);
    router.delete('/paciente/:dni', paciente.delete);

    router.get('/evento', evento.findAll);
    router.get('/evento/:id', evento.findOne);
    router.post('/evento', evento.create);
    router.put('/evento/:id', evento.update);
    router.delete('/evento/:id', evento.delete);

    router.get('/recomendacion', recomendacion.findAll);
    router.get('/recomendacion/:id', recomendacion.findOne);
    router.post('/recomendacion', recomendacion.create);
    router.put('/recomendacion/:id', recomendacion.update);
    router.delete('/recomendacion/:id', recomendacion.delete);

    module.exports = router;
