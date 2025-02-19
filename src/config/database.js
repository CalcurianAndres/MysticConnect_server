const mongoose = require('mongoose');


const connectDB = async () => {
  try {

    await mongoose.connect('mongodb+srv://admin:GidiFczxBTc3t5yK@mysticdb.2m0hd.mongodb.net/', {});
    // await mongoose.connect(process.env.MONGO_URI_2, {});
    console.log('Conexión a MongoDB exitosa a mongodb+srv://admin:GidiFczxBTc3t5yK@mysticdb.2m0hd.mongodb.net/'); // Mensaje cuando se conecta
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err.message);
    process.exit(1); // Salir si falla la conexión
  }
};

module.exports = connectDB