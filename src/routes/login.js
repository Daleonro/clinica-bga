const router = require('express').Router();

require('../models/Pacientes');


router.get('/login', (req,res) => {
    res.render('login');
});


module.exports = router;