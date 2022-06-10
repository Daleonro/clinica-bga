const router = require('express').Router();


router.get('/doctor', (req,res) => {
    res.render('doctor');
})


module.exports = router;