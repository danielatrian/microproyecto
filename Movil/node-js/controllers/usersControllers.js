const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Keys = require('../config/keys')
module.exports = {
    login(req,res){
        const email = req.body.email;
        const password = req.body.password;

        User.findByEmail(email, async (err, MyUser) =>{
            if (err){
                return res.status(501).json({
                    seccess:false,
                    message: 'User not found',
                    error: err
                });
            }
            if (!MyUser){//Cliente sin autorizacion para realizar la peticion
                return res.status(401).json({
                    success: false,
                    message: 'El email no existe en la base de datos'
                });
            }
            const isPasswordValid = await bcrypt.compare(password, MyUser.password);
            if (isPasswordValid) {
                const token = jwt.sign({id: MyUser.id, email: MyUser.email}, Keys.secretOrkey, {});

                const data ={
                    id: MyUser.id,
                    email: MyUser.email,
                    lastname: MyUser.lastname,
                    image: MyUser.image,
                    phone: MyUser.phone,
                    session_token: `JWT ${token}`
                }
                return res.status(201).json({
                    success: true,
                    message: 'Usuario autenticado',
                    data: data
                });
            }
            else {
                return res.status(401).json({
                    success: false,
                    message: 'Contraseña incorrecta',
                });
            }
        });
    },


    register(req, res) {
        const user = req.body ; //datos del cliente
        User.create(user, (err, data) =>{
            if (err){
                return res.status(501).json({
                    success: false,
                    message: 'Error al crear al usuario',
                    error: err
                }
            );
            }
            return res.status(201).json({
                success:true,
                message: 'creado usuario',
                data: data //Id del usuario
            });
        });
    }
};