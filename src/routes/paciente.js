const router = require('express').Router();

const { body, validationResult } = require('express-validator');

const Paciente = require('../models/Pacientes');

router.get('/new-paciente', (req,res) => {
    res.render('new-paciente');
});

router.post('/nuevo-paciente', [
    body('tipoDocumento', 'Ingrese el tipo de documento').exists().isLength({min:5}),
    body('cedula', 'Ingrese un numero de cedula valido sin comas ni puntos').exists().isNumeric(),
    body('nombrePaciente', 'Ingrese un nombre valido').exists().isLength({min:5}),
    body('apellidoPaciente', 'Ingrese un apellido valido').exists().isLength({min:5}),
    body('numeroPaciente', 'Ingrese un numero de telefono valido').exists().isNumeric(),
    body('direccionPaciente', 'Ingrese una direccion valida').exists().isLength({min:5}),
    body('ciudadPaciente', 'Ingrese una ciudad valida').exists().isLength({min:5}),
    body('historiaClinica', 'Ingrese la historia clinica del paciente').exists().isLength({min:5}),
    body('date', 'Ingrese la fecha de la consulta').exists().isLength({min:5})
    ], async (req,res) => {
        const {tipoDocumento, cedula, nombrePaciente, apellidoPaciente, numeroPaciente, direccionPaciente, ciudadPaciente, historiaClinica, date} = req.body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const validaciones = errors.array()
            res.render('new-paciente', { validaciones });
        } else {
            const newPaciente = new Paciente({tipoDocumento, cedula, nombrePaciente, apellidoPaciente, numeroPaciente, direccionPaciente, ciudadPaciente, historiaClinica, date})
            await newPaciente.save();
            console.log(newPaciente);
            res.redirect('/doctor-main')
        }
        });

        
        router.get('/consulta-paciente', (req,res) => {
        res.render('consulta-paciente');
        });


module.exports = router;