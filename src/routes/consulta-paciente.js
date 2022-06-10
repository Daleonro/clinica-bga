const router = require('express').Router();

require('../models/Pacientes');


router.get('/consulta-paciente', (req,res) => {
    res.render('consulta-paciente');
});


module.exports = router;