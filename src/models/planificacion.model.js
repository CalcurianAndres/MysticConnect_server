const mongoose = require('mongoose');

const PlanificacionSchema = new mongoose.Schema({
    borrado:{type:Boolean, default:false},
    mes: { type: String, required: true },
    inicio: { type: String, required: true },
    cierre: { type: String, required: true },
    metas: {
        tradicional: {
            mystic: {
                impulso: { type: Number, required: true },
                evento: { type: Number, required: true },
            },
            qerametik: {
                impulso: { type: Number, required: true },
                evento: { type: Number, required: true },
            },
        },
        rebranding: {
            mystic: {
                impulso: { type: Number, required: true },
                evento: { type: Number, required: true },
            },
            qerametik: {
                impulso: { type: Number, required: true },
                evento: { type: Number, required: true },
            },
        },
    },
    incentivos: [
        {
            de: { type: Number, required: true },
            hasta: { type: Number, required: true },
            incentivo: { type: Number, required: true },
        },
    ],
}, {
    timestamps: true, // Agrega createdAt y updatedAt
});

module.exports = mongoose.model('Planificacion', PlanificacionSchema);