const express = require('express');
const Planificacion = require('../models/planificacion.model');

module.exports = (io) => {
    const router = express.Router();


    // Crear o actualizar Planificación
    router.post('/', async (req, res) => {
        try {
            let savePlanificacion;

            if (req.body._id) {
                // Intentar actualizar si existe _id
                savePlanificacion = await Planificacion.findByIdAndUpdate(
                    req.body._id,           // ID para buscar
                    req.body,               // Nuevos datos
                    { new: true, upsert: true } // `new` devuelve el documento actualizado; `upsert` lo crea si no existe
                );
                io.emit('planificacion:actualizado', savePlanificacion);
            } else {
                // Crear una nueva planificación si no hay _id
                const newPlanificacion = new Planificacion(req.body);
                savePlanificacion = await newPlanificacion.save();
                io.emit('planificacion:creado', savePlanificacion);
            }

            res.status(201).json(savePlanificacion);
        } catch (error) {
            console.error(error);
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