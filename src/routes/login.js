const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const User = require('../models/promotora.model');
const verificarToken = require('../auth/autenticacion');

module.exports = (io) => {
    const router = express.Router();

    router.post('/', async (req, res) => {
        const body = req.body;

        const SEED = process.env.SEED;
        const EXP = process.env.EXP;

        try {
            const usuarioDB = await User.findOne({ correo: body.correo });

            if (!usuarioDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'Correo incorrecto'
                    }
                });
            }

            const passwordValid = await bcrypt.compare(body.password, usuarioDB.password);

            if (!passwordValid) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'Contraseña incorrecta'
                    }
                });
            }

            const token = jwt.sign({ usuario: usuarioDB }, SEED, { expiresIn: EXP });

            res.json({
                ok: true,
                usuario: usuarioDB,
                token
            });

        } catch (err) {
            console.error('Error en el login:', err);
            res.status(500).json({
                ok: false,
                err
            });
        }
    });


    router.get('/renew', verificarToken, async (req, res) => {

        const SEED = process.env.SEED;
        const EXP = process.env.EXP;

        try {
            const token = jwt.sign(
                { usuario: req.usuario },
                SEED,
                { expiresIn: EXP }
            );

            res.json({
                ok: true,
                usuario: req.usuario,
                token,
            });
        } catch (err) {
            console.log(err)
            res.status(500).json({
                ok: false,
                err
            });
        }
    });

    router.post('/change-password', async (req, res) => {
        const { correo, newPassword } = req.body;

        console.log('aqui llego')

        try {
            // Buscar al usuario por su correo
            const usuarioDB = await User.findOne({ correo });

            if (!usuarioDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'Usuario no encontrado'
                    }
                });
            }

            // Encriptar la nueva contraseña
            const hashedPassword = await bcrypt.hash(newPassword, 10);

            // Actualizar la contraseña en la base de datos
            usuarioDB.password = hashedPassword;
            await usuarioDB.save();

            res.json({
                ok: true,
                message: 'Contraseña actualizada con éxito'
            });

        } catch (err) {
            console.error('Error al cambiar la contraseña:', err);
            res.status(500).json({
                ok: false,
                err: {
                    message: 'Ocurrió un error al cambiar la contraseña'
                }
            });
        }
    });

    return router;
}

