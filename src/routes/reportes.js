const express = require('express');
const Reportes = require('../models/reportes.model');

module.exports = (io) => {
    const router = express.Router();

    // Leer todos los productos
    router.get('/', async (req, res) => {
        try {
            const reportes = await Reportes.find({borrado:false})
                                            .populate('cliente promotora')
                                            .populate('productos.producto')
            res.status(200).json(reportes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Crear Reporte
    router.post('/', async (req, res) => {
        try {
            const newReporte = new Reportes(req.body);
            const saveReporte = await newReporte.save();
            
            // Emitir evento a través de Socket.IO
            io.emit('reporte:creado', saveReporte);
            
            res.status(201).json(saveReporte);
        } catch (error) {
            console.log(error)
            res.status(400).json({ error: error.message });
        }
    });

    return router;
}