
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const  db = require('../models');


const passportApi = app => {

        
        
//*************************************//setting up the passport strategy//********************************************
        passport.use(new LocalStrategy(
            (username, password, done) => {
            //need to implement our schema
                User.getUserByUsername(username, (err, user) => {
                        if(err) throw err;
                        if(!user){
                            return done(null, false, {message: 'Unknown User'});
                        }
            //need to implement our schema
                User.comparePassword(password, user.password, (err, isMatch) => {
                        if(err) throw err;
                        if(isMatch){
                            return done(null, user);
                        } else {
                            return done(null, false, {message: 'Invalid password'});
                        }
                    });
                });
        }));

        passport.serializeUser((user, done) => {
             done(null, user.id);
        });

        passport.deserializeUser((id, done) => {
        //need to implement our schema
            User.getUserById(id, (err, user) => {
                done(err, user);
            });
        });
//*************************************--login/logout routes--********************************************
        app.post('/login',        
            passport.authenticate('local', {

                successRedirect:'/', 
                failureRedirect:'/users/login',
                failureFlash: true

            }), 
            (req, res) => {
                    res.redirect('/');
        });

        app.get('/logout', (req, res) => {
            req.logout();

            req.flash('success_msg', 'You are logged out');

            res.redirect('/users/login');
        });
//******************************************************************************************************

        return app
}

module.exports = passportApi;