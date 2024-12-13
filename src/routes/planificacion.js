const express = require('express');
const Planificacion = require('../models/planificacion.model');

module.exports = (io) => {
    const router = express.Router();


    // CrearPlanificación
    router.post('/', async (req, res) => {
        console.log(req.body)
        try {
            const newPlanificacion = new Planificacion(req.body);
            const savePlanificacion = await newPlanificacion.save();

            // Emitir evento a través de Socket.IO
            io.emit('planificacion:creado', savePlanificacion);

            res.status(201).json(savePlanificacion);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });

    // Leer todos los productos
    router.get('/', async (req, res) => {
        try {
            const planificacion = await Planificacion.find({ borrado: false });
            res.status(200).json(planificacion);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    return router;
}