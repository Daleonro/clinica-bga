const Pacientes = require('../models/Pacientes');

const router = require('express').Router();

require('../models/Pacientes');


router.get('/doctor-main', async (req,res) => {
    const pacientes = await Pacientes.find();
});


module.exports = router;