const http = require('http');
const { Server } = require('socket.io');
const connectDB = require('./config/database');
const createApp = require('./app');

// Cargar variables de entorno
require('dotenv').config();

// Conectar a MongoDB
connectDB();

// Crear servidor HTTP
const server = http.createServer();
const io = new Server(server, {
    cors: {
        origin: '*',
    },
});

// Configurar la app con sockets
const app = createApp(io);
server.on('request', app);

// Manejo de conexiones de sockets
io.on('connection', (socket) => {
    console.log('Cliente conectado:', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado:', socket.id);
    });
});

// Iniciar servidor
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
