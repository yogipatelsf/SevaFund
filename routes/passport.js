
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const  db = require('../models');


const passportApi = app => {
//******************************* * Middleware for private routes * ******************************/
    function ensureAuthenticated(req, res, next){
        if(req.isAuthenticated()){
            return next();
        } else {
            //req.flash('error_msg','You are not logged in');
            res.redirect('/users/login');
        }
    }

    app.get('/loginerror', function(req,res) {
        console.log(req.flash('error'));
        res.redirect('/');
    })

    app.get('/flash', function(req, res){
        // Set a flash message by passing the key, followed by the value, to req.flash(). 
        req.flash('info', 'Flash is back!')
        console.log('back ', req.flash('info'));
        
        res.redirect('/');
      });
       
      

//************************************* * Donor Auth * ******************************************
       

        app.post('/donor/login',
            //     res.send('donor login route hit');
            //     // res.redirect('/')
            // })
                passport.authenticate('donor', {
                            // successRedirect:'/', 
                            failureRedirect:'/'
                            // failureFlash: true
                        }), 
                        (req, res) => {
                                res.send('donor login route hit');
                                // res.redirect('/');
                    });
////************************************* * Charity Auth * *************************************

    
        app.post('/charity/login', (req,res) => {
                res.send("charity login route hit");
                })
                // passport.authenticate('charity', {
            
                //             successRedirect:'/newPo', 
                //             failureRedirect:'/loginerror',
                //             failureFlash: true
                //         }), 
                //         (req, res) => {
                //                 res.send('donor login route hit');
                //                 // res.redirect('/newPo');
                //     });
//******************************************* * serialization * *******************************************
        passport.serializeUser((user, done) => {
            let key = {
                id: user._id,
                type: user.Type
            }
             done(null, key);
        });

        passport.deserializeUser((key, done) => {
        //need to implement our schema
            if(key.type === 'Donor'){
                db.Donor.getDonorById(key.id, (err, user) => {
                    done(err, user);
                });
            }else if (key.type === 'Charity') {
                db.Charity.getCharityById(key.id, (err, user) => {
                    done(err, user);
                });
            }
            
        });
//*************************************logout********************************************
       
        app.get('/logout', (req, res) => {
            req.logout();

            req.flash('success_msg', 'You are logged out');

            res.redirect('/');
        });

//******************************************************************************************************

        return app
}

module.exports = passportApi;