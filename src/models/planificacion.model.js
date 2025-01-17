const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanificacionSchema = new Schema({
    cliente: { type: Schema.Types.ObjectId, ref: 'Cliente' },
    fecha: { type: Date },
    promotora: { type: String },
    ejecutivo: { type: String },
    observacion: { type: String },
    tipo: { type: String },
    cliente_nombre: { type: String }
});

const IncentivoSchema = new Schema({
    de: { type: Number, required: true },
    hasta: { type: Number, required: true },
    incentivo: { type: Number, required: true }
});

const MetasSchema = new Schema({
    evento: { type: Number, required: true },
    impulso: { type: Number, required: true }
});

const CategoriaMetasSchema = new Schema({
    mystic: { type: MetasSchema, required: true },
    qerametik: { type: MetasSchema, required: true }
});

const PlanSchema = new Schema(
    {
        borrado: { type: Boolean, default: false },
        mes: { type: String, required: true },
        inicio: { type: Date, required: true },
        cierre: { type: Date, required: true },
        incentivos: { type: [IncentivoSchema], required: true },
        incentivos_qerametik: { type: [IncentivoSchema], required: true },
        metas: {
            rebranding: { type: CategoriaMetasSchema, required: true },
            tradicional: { type: CategoriaMetasSchema, required: true }
        },
        planificacion: { type: [PlanificacionSchema], required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Planificacion', PlanSchema);
