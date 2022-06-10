const router = require('express').Router();

require('../models/Pacientes');


router.get('/consulta', (req,res) => {
    res.render('consulta');
});


module.exports = router;