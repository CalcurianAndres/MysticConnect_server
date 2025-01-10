const express = require('express');
const Reportes = require('../models/reportes.model');

module.exports = (io) => {
    const router = express.Router();

    // Leer todos los productos
    router.get('/', async (req, res) => {
        try {
            const { inicio, fin } = req.query;

            // Validar que inicio y fin estén presentes
            if (!inicio || !fin) {
                return res.status(400).json({ error: 'Se requieren las fechas inicio y fin.' });
            }

            // Buscar los reportes con filtro de fechas y ordenarlos por fecha
            const reportes = await Reportes.find({
                borrado: false,
                fecha: {
                    $gte: inicio.split('T')[0], // Fecha en formato 'yyyy-mm-dd'
                    $lte: fin.split('T')[0]    // Fecha en formato 'yyyy-mm-dd'
                }
            })
                .populate('cliente promotora')
                .populate('productos.producto')

            res.status(200).json(reportes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });


    // Crear o Actualizar Reporte
    router.post('/', async (req, res) => {
        try {
            const { _id, ...reporteData } = req.body; // Extraemos el _id y el resto de los datos

            let saveReporte;

            if (_id) {
                // Si hay _id, intentamos encontrar y actualizar el documento
                saveReporte = await Reportes.findByIdAndUpdate(
                    _id,
                    { $set: reporteData }, // Actualizamos con los nuevos datos
                    { new: true, upsert: true } // `new: true` devuelve el documento actualizado, `upsert: true` crea uno si no existe
                );
            } else {
                // Si no hay _id, creamos un nuevo documento
                const newReporte = new Reportes(reporteData);
                saveReporte = await newReporte.save();
            }

            // Emitir evento a través de Socket.IO
            io.emit('reporte:creado', saveReporte);

            res.status(201).json(saveReporte);
        } catch (error) {
            console.log(error);
            res.status(400).json({ error: error.message });
        }
    });

    return router;
}