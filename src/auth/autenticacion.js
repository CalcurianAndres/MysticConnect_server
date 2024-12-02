const jwt = require('jsonwebtoken');
require('dotenv').config();

const verificarToken = async (req, res, next) => {

    const SEED = process.env.SEED;
    const EXP  = process.env.EXP;

    const token = req.get('Authorization');

    if (!token) {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'Token no proporcionado'
            }
        });
    }

    try {
        const decoded = await jwt.verify(token, SEED);
        req.usuario = decoded.usuario;
        next();
    } catch (err) {
        console.error('Error en la verificación del token:', err);
        return res.status(401).json({
            ok: false,
            err: {
                message: 'Token no válido'
            }
        });
    }
};

module.exports = verificarToken;