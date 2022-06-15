const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    usuario : {type: 'string', required: true},
    correo : {type: 'string', required: true},
    password : {type: 'string', required: true}
});

userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password, salt);
    return hash;
};

userSchema.methods.mathPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};



module.exports = mongoose.model('User', userSchema);