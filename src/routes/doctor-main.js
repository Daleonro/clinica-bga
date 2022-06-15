const Pacientes = require('../models/Pacientes');

const router = require('express').Router();



router.get('/doctor-main', async (req,res) => {
    const pacientes = await Pacientes.find({}).sort({date: 'desc'}).lean();
    res.render('doctor-main', { pacientes });
});


module.exports = router;