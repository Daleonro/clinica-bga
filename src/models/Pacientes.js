const mongoose = require('mongoose');
const { Schema } = mongoose;

const pacienteSchema = new Schema({
    tipoDocumento: {type: String, required: true},
    cedula: {type: Number , required: true},
    nombrePaciente: {type: String, required: true},
    apellidoPaciente: {type: String, required: true},
    numeroPaciente: {type: Number, required: true},
    direccionPaciente: {type: String, required: true},
    ciudadPaciente : {type: String, required:true},
    historiaClinica: {type: String, required: true},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Paciente', pacienteSchema);