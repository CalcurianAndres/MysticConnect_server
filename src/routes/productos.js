const express = require('express');
const Producto = require('../models/productos.model');

module.exports = (io) => {
    const router = express.Router();
    
     // Crear producto
     router.post('/', async (req, res) => {
        try {
            const newProducto = new Producto(req.body);
            const saveProducto = await newProducto.save();

            // Emitir evento a través de Socket.IO
            io.emit('producto:creado', saveProducto);

            res.status(201).json(saveProducto);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });

    // Leer todos los productos
    router.get('/', async (req, res) => {
        try {
            const productos = await Producto.find({borrado:false});
            res.status(200).json(productos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // Actualizar producto por ID
    router.put('/:id', async (req, res) => {
        try {
            const updateProducto = await Producto.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

            if (!updateProducto) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }

            // Emitir evento de actualización
            io.emit('producto:actualizado', updateProducto);

            res.status(200).json(updateProducto);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });

    // Eliminar usuario por ID
    router.delete('/:id', async (req, res) => {
        try {
            const updateProducto = await Producto.findByIdAndUpdate(
                req.params.id,
                {borrado:true},
                { new: true }
            );

            if (!updateProducto) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }

            // Emitir evento de actualización
            io.emit('usuario:eliminado', updateProducto);

            res.status(200).json(updateProducto);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
    
    return router;
}