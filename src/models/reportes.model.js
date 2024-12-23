const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const arrayProductosSchema = new Schema({
  producto: { type: Schema.Types.ObjectId, ref: 'Producto', required: true },
  inicio: { type: Number, required: true },
  final: { type: Number, required: true },
});

const reporteSchema = new Schema(
  {
    borrado: { type: Boolean, default: false },
    promotora: { type: Schema.Types.ObjectId, ref: 'User' },
    cliente: { type: Schema.Types.ObjectId, ref: 'Cliente', required: true },
    productos: { type: [arrayProductosSchema], required: true },
    tipo: { type: String, required: true },
    observacion: { type: String, required: true },
    evento: { type: String }, // Campo opcional
    fecha: { type: String }
  },
  { timestamps: true } // Agrega automáticamente `createdAt` y `updatedAt`
);

module.exports = model('Reporte', reporteSchema);