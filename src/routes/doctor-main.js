const router = require('express').Router();


router.get('/user/doctor', (req,res) => {
    res.send('Pagina de vista principal del doctor');
})


module.exports = router;