const express = require('express');
const Clientes = require('../models/cliente.model');

module.exports = (io) => {
    const router = express.Router();

    // Leer todos los clientes
    router.get('/', async (req, res) => {
        try {
            const clientes = await Clientes.find({borrado:false});
            res.status(200).json(clientes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Crear cliente
    router.post('/', async (req, res) => {
        try {
            const newCliente = new Clientes(req.body);
            const saveCliente = await newCliente.save();

            // Emitir evento a través de Socket.IO
            io.emit('producto:creado', saveCliente);

            res.status(201).json(saveCliente);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });

    // Eliminar usuario por ID
    router.delete('/:id', async (req, res) => {
        try {
            const updateCliente = await Clientes.findByIdAndUpdate(
                req.params.id,
                {borrado:true},
                { new: true }
            );

            if (!updateCliente) {
                return res.status(404).json({ error: 'cliente no encontrado' });
            }

            // Emitir evento de actualización
            io.emit('cliente:eliminado', updateCliente);

            res.status(200).json(updateCliente);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });

    // Actualizar cliente por ID
    router.put('/:id', async (req, res) => {
        try {
            const updateCliente = await Clientes.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

            if (!updateCliente) {
                return res.status(404).json({ error: 'Cliente no encontrado' });
            }

            // Emitir evento de actualización
            io.emit('producto:actualizado', updateCliente);

            res.status(200).json(updateCliente);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });

    return router;
}
