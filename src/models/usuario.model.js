const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema({
    nome_usuario: String,
    sobrenome_usuario: String,
    email_usuario: String,
    senha_usuario: String,
    telefone_usuario: Number,
    cpf_usuario: Number,
}, {
    timestamps: true
})

DataSchema.pre('save', function(next) {
    if (!this.isModified('senha_usuario')) {
        return next();
    }
    this.senha_usuario = bcrypt.hashSync(this.senha_usuario, 10)
    next();
})

DataSchema.pre('findOneAndUpdate', function(next) {
    var password = this.getUpdate().senha_usuario + '';
    if (password.length < 55) {
        this.getUpdate().senha_usuario = bcrypt.hashSync(password, 10)
    }
    next();
})

const usarios = mongoose.model('Usuarios', DataSchema);
module.exports = usarios;