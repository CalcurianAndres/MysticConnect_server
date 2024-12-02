const User = require('../models/promotora.model');

const userController = {

  async getAllUsers(req, res) {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  },

  async getUserById(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  },

  async createUser(req, res) {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();

        // Emitir el evento a través de Socket.IO
        io.emit('usuario:creado', savedUser);

        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  },

  async updateUser(req, res) {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Retorna el usuario actualizado
        );

        if (!updatedUser) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Emitir el evento de actualización
        io.emit('usuario:actualizado', updatedUser);

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  },

  async deleteUser(req, res) {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Emitir el evento de eliminación
        io.emit('usuario:eliminado', deletedUser);

        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  },
};

module.exports = userController;