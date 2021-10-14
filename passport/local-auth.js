const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use('local-signup', new LocalStrategy({
    usernameField: 'userName',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, userName, password, done) => {

    const user = await User.findOne({userName: userName});
    if(user) {
        return done(null, false, req.flash('signupMessage', 'The userName is already taken.'));
    } else {
        const newUser = new User();
        newUser.userName = userName;
        newUser.password = newUser.encryptPassword(password);
        await newUser.save();
        done(null, newUser);
    }
    
}));

passport.use('local-signin', new LocalStrategy({
    usernameField: 'userName',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, userName, password, done) => {
    
    const user = await User.findOne({userName: userName});
    if(!user) {
        return done(null, false, req.flash('signinMessage', 'No User found.'));
    }
    if(!user.comparePassword(password)) {
        return done(null, false, req.flash('signinMessage', 'Incorrect Password'));
    }
    done(null, user);
}));