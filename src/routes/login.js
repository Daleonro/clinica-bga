const router = require('express').Router();


router.get('/login', (req,res) => {
    res.send('Vista de inicio de sesion medico');
})


module.exports = router;