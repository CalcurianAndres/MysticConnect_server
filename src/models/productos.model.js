const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    borrado: { type: Boolean, default: false },
    linea: { type: String, required: true },
    marca: { type: String, required: true },
    producto: { type: String, required: true },
    puntos: { type: Number, required: true },
    precio: { type: Number, required: true },
}, {
    timestamps: true, // Agrega createdAt y updatedAt
});

module.exports = mongoose.model('Producto', ProductoSchema);