const express = require('express');
const cors = require('cors');
const path = require('path');
const userRoutes = require('./routes/users');
const productosRoutes = require('./routes/productos')
const clientesRoutes = require('./routes/clientes')
const reportesRoutes = require('./routes/reportes')
const loginRoutes = require('./routes/login')
const planificacionRoutes = require('./routes/planificacion')

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Carpeta pública
app.use(express.static(path.join(__dirname, '../public')));

// Rutas principales
module.exports = (io) => {
    app.use('/api/users', userRoutes(io)); // Pasa io a las rutas de usuarios
    app.use('/api/productos', productosRoutes(io)); // Pasa io a las rutas de productos
    app.use('/api/clientes', clientesRoutes(io)); // Pasa io a las rutas de clientes
    app.use('/api/reportes', reportesRoutes(io)); // Pasa io a las rutas de reportes
    app.use('/api/login', loginRoutes(io)); // Pasa io a las rutas de reportes
    app.use('/api/planificacion', planificacionRoutes(io)) // pasa io a las rutas de planificación
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public', 'index.csr.html'));
    });
    return app;


};