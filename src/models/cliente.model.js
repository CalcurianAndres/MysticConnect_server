const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    borrado: {type: Boolean, default:false},
    cliente: { type: String, required: true },
    rif: { type: String, required: true },
    marca: { type: String, required: true},
}, {
    timestamps: true, // Agrega createdAt y updatedAt
});

module.exports = mongoose.model('Cliente', ClienteSchema);