const router = require('express').Router();


router.get('/consulta', (req,res) => {
    res.render('consulta');
})


module.exports = router;