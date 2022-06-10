const router = require('express').Router();

require('../models/Pacientes');


router.get('/doctor-main', (req,res) => {
    res.render('doctor-main');
});


module.exports = router;