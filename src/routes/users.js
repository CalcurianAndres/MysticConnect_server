const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/promotora.model');

module.exports = (io) => {
    const router = express.Router();

    // Crear usuario
    router.post('/', async (req, res) => {
        req.body.password = bcrypt.hashSync('1234567', 10)
        try {
            const newUser = new User(req.body);
            const savedUser = await newUser.save();

            // Emitir evento a través de Socket.IO
            io.emit('usuario:creado', savedUser);

            res.status(201).json(savedUser);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });

    // Leer todos los usuarios
    router.get('/', async (req, res) => {
        try {
            const users = await User.find({ borrado: false, role: 'Promotora' }).select('-password');;
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Leer un usuario por ID
    router.get('/:id', async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Actualizar usuario por ID
    router.put('/:id', async (req, res) => {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

            if (!updatedUser) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }

            // Emitir evento de actualización
            io.emit('usuario:actualizado', updatedUser);

            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });

    // Eliminar usuario por ID
    router.delete('/:id', async (req, res) => {
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                { borrado: true },
                { new: true }
            );

            if (!updatedUser) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }

            // Emitir evento de actualización
            io.emit('usuario:eliminado', updatedUser);

            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });

    return router;
};
