const router = require('express').Router();

require('../models/Pacientes');

router.get('/ingreso-paciente', (req,res) => {
    res.render('ingreso-paciente');
});

router.post('/nuevo-paciente', (req,res) => {
    console.log(req.body);
    res.send('Datos enviados :D')
});

router.get('/consulta-paciente', (req,res) => {
    res.render('consulta-paciente');
});

router.get('/ingreso-paciente', (req,res) => {
    res.render('ingreso-paciente');
});

module.exports = router;