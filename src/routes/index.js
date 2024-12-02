const express = require('express');
const router = express.Router();

// Importar las rutas específicas
const userRoutes = require('./users');
const productosRoutes = require('./productos')
const ClientesRoutes = require('./clientes')
const ReportesRoutes = require('./reportes')
const LoginRoutes = require('./login')

// Configurar rutas
router.use('/users', userRoutes);
router.use('/productos', productosRoutes);
router.use('/clientes', ClientesRoutes);
router.use('/reportes', ReportesRoutes)
router.use('/login', LoginRoutes)

module.exports = router;