const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    borrado: {type: Boolean, default:false},
    cliente: { type: String, required: true },
    rif: { type: String, required: true },
    informacion: { type: String, required: true, unique: true },
}, {
    timestamps: true, // Agrega createdAt y updatedAt
});

module.exports = mongoose.model('Cliente', ClienteSchema);