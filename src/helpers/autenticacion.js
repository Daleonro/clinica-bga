const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();  
    }
    req.flash('error_msg', 'El usuario no se encuentra autorizado por favor inicie sesion');
    res.redirect('/login');
};

module.exports = helpers;