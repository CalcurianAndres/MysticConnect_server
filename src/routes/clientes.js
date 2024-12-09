const express = require('express');
const Clientes = require('../models/cliente.model');

const fs = require('fs');

module.exports = (io) => {
    const router = express.Router();

    // Leer todos los clientes
    router.get('/', async (req, res) => {
        try {
            const clientes = await Clientes.find({ borrado: false });
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
                { borrado: true },
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

    router.get('/transform', async (req, res) => {

        // Ejecutar la función con los archivos de entrada y salida
        const inputFile = 'C:\\Users\\Usuario\\Desktop\\test.clientes.json';  // Cambia el nombre de tu archivo de entrada
        const outputFile = 'C:\\Users\\Usuario\\Desktop\\clientes.json';  // Cambia el nombre del archivo de salida

        processJson(inputFile, outputFile)

        // Función para convertir la primera letra a mayúscula en cada palabra
        function capitalizeFirstLetter(str) {
            return str
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');
        }

        // Función principal para procesar el archivo JSON
        async function processJson(inputFile, outputFile) {
            // Leemos el archivo JSON de entrada
            const rawData = fs.readFileSync(inputFile, 'utf-8');
            const jsonData = JSON.parse(rawData);

            // Usamos un Map para evitar duplicados basados en cliente, rif y marca
            const uniqueData = new Map();

            jsonData.forEach(item => {
                console.log(item)
                // Creamos una clave única para cada combinación de cliente, rif y marca
                const clientKey = `${item.cliente.toLowerCase()}-${item.rif.toLowerCase()}-${item.marca.toLowerCase()}`;

                // Si no existe una entrada con la misma clave, la agregamos
                if (!uniqueData.has(clientKey)) {
                    uniqueData.set(clientKey, item);

                    // Convertimos la primera letra de cliente, rif y marca a mayúscula
                    item.cliente = capitalizeFirstLetter(item.cliente);
                    item.rif = capitalizeFirstLetter(item.rif);
                    item.marca = capitalizeFirstLetter(item.marca);
                }
            });

            // Convertimos el Map a un array con los valores únicos
            const result = Array.from(uniqueData.values());

            // Guardamos el resultado en un nuevo archivo JSON
            fs.writeFileSync(outputFile, JSON.stringify(result, null, 2), 'utf-8');
            console.log(`Archivo procesado con éxito. El resultado está en: ${outputFile}`);
        }
    })


    return router;
}


