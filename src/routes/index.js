const router = require('express').Router();


router.get('/', (req,res) => {
    res.send('Landing page clinica bga');
})


module.exports = router;