const router = require('express').Router();


router.get('/user/doctor/consulta', (req,res) => {
    res.send('Pagina de la vista y consulta de pacientes');
})


module.exports = router;