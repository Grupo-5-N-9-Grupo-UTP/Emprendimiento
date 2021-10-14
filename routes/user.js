import express from "express";
const router = express.Router();
const passport = require('passport');

import User from '../models/user';  // importar el modelo User
// Agregar un usuario

    router.post('/user/register', async(req, res) => {  //Ruta POST
        const body = req.body; 
        try { const userDB = await User.create(body); 
            res.status(200).json(userDB); 
        } catch (error) { 
            return res.status(500).json({ 
                mensaje: 'Ocurrio un error', 
                error 
            }) 
        } 
    }); 

    router.post('/user/login', async(req, res) => {  //Ruta POST
        const body = req.body;
        try { 
            const userDB = await User.findOne({userName: body.userName, password: body.password});
            if (userDB) {
                res.status(200).json({ 
                    mensaje: 'Login'
                });
            } else {
                res.status(401).json({ 
                    mensaje: 'Credenciales inválidas'
                });
            }
        } catch (error) { 
            return res.status(500).json({ 
                mensaje: 'Ocurrio un error', 
                error 
            }) 
        } 
    }); 

// Get con parámetros 
    router.get('/user/login', async(req, res) => { 
        const _userName = req.params.userName; 
        const _password = req.params.password; 
        try { 
            const userDB = await User.findOne({userName:_userName, password:_password});
            if (userDB) {
                res.status(200)
            } else {
                res.status(401)
            }
        } catch (error) { 
            return res.status(400).json({ 
                mensaje: 'Ocurrio un error', 
                error 
            })
        } 
    });

    // Delete eliminar un usuario
    router.delete('/user/:id', async(req, res) => { 
        const _id = req.params.id; 
        try { 
            const userDB = await User.findByIdAndDelete({_id}); 
            if(!userDB){ 
                return res.status(400).json({ 
                    mensaje: 'No se encontró el id indicado', 
                    error 
                }) 
            } res.json(userDb); 
        } catch (error) { 
            return res.status(400).json({ 
                mensaje: 'Ocurrio un error', 
                error 
            }) 
        } 
    });

    // Put actualizar un usuario
    router.put('/user/:id', async(req, res) => { 
        const _id = req.params.id; 
        const body = req.body; 
        try { 
            const userDB = await User.findByIdAndUpdate(_id, body, {new: true}); 
            res.json(userDB); 
        } catch (error) { 
            return res.status(400).json({ 
                mensaje: 'Ocurrio un error', 
                error 
            }) 
        } 
    });


// const LocalStrategy = require('passport-local').Strategy;

// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//     const user = await User.findById(id);
//     done(null, user);
// });

// passport.use('local-signup', new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password',
//     passReqToCallback: true
// }, async (req, email, password, done) => {

//     const user = await User.findOne({email: email});
//     if(user) {
//         return done(null, false, req.flash('signupMessage', 'The Email is already taken.'));
//     } else {
//         const newUser = new User();
//         newUser.email = email;
//         newUser.password = newUser.encryptPassword(password);
//         await newUser.save();
//         done(null, newUser);
//     }
    
// }));

// passport.use('local-signin', new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password',
//     passReqToCallback: true
// }, async (req, email, password, done) => {
    
//     const user = await User.findOne({email: email});
//     if(!user) {
//         return done(null, false, req.flash('signinMessage', 'No User found.'));
//     }
//     if(!user.comparePassword(password)) {
//         return done(null, false, req.flash('signinMessage', 'Incorrect Password'));
//     }
//     done(null, user);
// }));

// router.get('/', (req, res, next) => {
//     res.render('index');
// });

// router.get('/signup', (req, res, next) => {
//     res.render('signup');
// });

// router.post('/signup', passport.authenticate('local-signup', {
//     successRedirect: '/profile',
//     failureRedirect: '/signup',
//     passReqToCallback: true
// }));

// router.get('/signin', (req, res, next) => {
//     res.render('signin');
// });

// router.post('/signin', passport.authenticate('local-signin', {
//     successRedirect: '/profile',
//     failureRedirect: '/signin',
//     passReqToCallback: true
// }));

// router.get('/logout', (req, res, next) => {
//     req.logout();
//     res.redirect('/')
// });

// router.get('/profile', isAuthenticated, (req, res, next) => {
//     res.render('profile');
// });

// function isAuthenticated(req, res, next) {
//     if(req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/');
// };

module.exports = router; // Exportamos la configuración de express app 