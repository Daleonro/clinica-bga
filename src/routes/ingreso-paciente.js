const router = require('express').Router();

require('../models/Pacientes');


router.get('/ingreso-paciente', (req,res) => {
    res.render('ingreso-paciente');
});


module.exports = router;