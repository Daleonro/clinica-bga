const router = require('express').Router();


const passport = require('passport');
const User = require('../models/Usuarios');



router.get('/login', (req,res) => {
    res.render('login');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/doctor-main',
    failureRedirect: '/login',
    failureFlash: true
}));

router.get('/registro', (req,res) => {
    res.render('registro');
});

router.post('/registro-usuario', async (req,res)=> {
    const {usuario, correo, codigo, password, confirmPassword} = req.body;
    const errors =[];
    const codMedico = 'medbga36541';
    if (password != confirmPassword) {
        errors.push({text: 'Las contraseñas no coinciden'}) 
    }
    if (password.length < 4) {
        errors.push({text: 'La contraseña debe ser mayor a 4 caracteres'}) 
    }
    if (codigo != codMedico) {
        errors.push({text: 'El codigo de medico habilitado no es valido'})
    }
    if (errors.length > 0) {
        res.render('registro', {errors, usuario, correo, codigo, password, confirmPassword})
    } else {
        const correoUsuario = await User.findOne({ correo: correo });
        if ( correoUsuario ) {
            req.flash('error_msg', 'El correo electronico ya se encuentra registrado');
            res.redirect('/registro');
        } else {
            const newUsuario = new User({ usuario, correo, password });
            newUsuario.password = await newUsuario.encryptPassword(password);
            await newUsuario.save();
            req.flash('success_msg', 'Usuario creado correctamente');
            res.redirect('/login')
        }   
    }
});

module.exports = router;