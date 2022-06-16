const Pacientes = require('../models/Pacientes');

const router = require('express').Router();

const { isAuthenticated } = require('../helpers/autenticacion');

router.get('/doctor-main', isAuthenticated,async (req,res) => {
    const pacientes = await Pacientes.find({}).sort({date: 'desc'}).lean();
    res.render('doctor-main', { pacientes });
});


module.exports = router;