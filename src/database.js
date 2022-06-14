const { default: mongoose } = require("mongoose");

mongoose.connect('mongodb://localhost/pacientes-db' , {
    // useCreateIndex : true,
    // useNewUrlParser: true,
    // useFindAndModify: false,
})
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.error(err));