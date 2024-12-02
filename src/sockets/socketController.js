module.exports = (socket, io) => {
    // Evento de prueba
    socket.on('mensaje', (data) => {
        console.log('Mensaje recibido:', data);
        io.emit('mensaje', `Mensaje desde el servidor: ${data}`);
    });

    // Manejar desconexión
    socket.on('disconnect', () => {
        console.log('Cliente desconectado:', socket.id);
    });
};