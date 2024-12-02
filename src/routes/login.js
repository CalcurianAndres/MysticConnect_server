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
        const EXP  = process.env.EXP;
    
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

            console.log()
    
            if (!passwordValid) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'Contraseña incorrecta'
                    }
                });
            }
    
            const token = jwt.sign({ usuario: usuarioDB }, SEED, {expiresIn:EXP});
    
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


    router.get('/renew',verificarToken , async (req, res) => {

        const SEED = process.env.SEED;
        const EXP  = process.env.EXP;

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

    return router;
}

