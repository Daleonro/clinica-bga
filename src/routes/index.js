const router = require('express').Router();



router.get('/index', (req,res) => {
    res.render('index');
});


module.exports = router;