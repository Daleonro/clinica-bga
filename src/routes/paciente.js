const router = require('express').Router();

const { body, validationResult } = require('express-validator');


require('../models/Pacientes');

router.get('/ingreso-paciente', (req,res) => {
    res.render('ingreso-paciente');
});

router.post('/nuevo-paciente', [
    body('cedula', 'Ingrese un numero de cedula valido sin comas ni puntos').exists().isNumeric().isLength({min:6}),
    body('nombrePaciente', 'Ingrese un nombre valido').exists().isString(),
    body('apellidoPaciente', 'Ingrese un apellido valido').exists().isString(),
    body('numeroPaciente', 'Ingrese un numero de telefono valido').exists().isNumeric().isLength({min:7}),
    body('direccionPaciente', 'Ingrese una direccion valida').exists(),
    body('ciudadPaciente', 'Ingrese una ciudad valida').exists(),
    body('historiaClinica', 'Ingrese la historia clinica del paciente').exists(),
    body('date', 'Ingrese la fecha de la consulta').exists()
], (req,res) => {
    console.log(req.body);
    const { tipoDocumento, cedula, nombrePaciente, apellidoPaciente, numeroPaciente, direccionPaciente, ciudadPaciente, historiaClinica, date } = req.body;
    res.send('Datos enviados :D')
});

router.get('/consulta-paciente', (req,res) => {
    res.render('consulta-paciente');
});

router.get('/ingreso-paciente', (req,res) => {
    res.render('ingreso-paciente');
});

module.exports = router;