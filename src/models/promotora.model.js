const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    borrado: { type: Boolean, default: false },
    restringido: { type: Boolean, default: true },
    fija: { type: Boolean, default: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    region: { type: String, required: true },
    telefono: { type: String, required: true },
    sueldo: { type: Number, required: true },
    foto: { type: String },
    estado: { type: String, default: 'habilitada' },
    role: { type: String, enum: ['Admin', 'Promotora', 'coordinadora'], required: true },
    password: { type: String, required: true },
    marca: { type: String },
}, {
    timestamps: true, // Agrega createdAt y updatedAt
});

module.exports = mongoose.model('User', UserSchema);