const router = require('express').Router();

require('../models/Pacientes');


router.get('/index', (req,res) => {
    res.render('index');
});


module.exports = router;