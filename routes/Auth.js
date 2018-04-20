const jwt = require('jsonwebtoken');
const  Donor = require('../models/Donor');
const  Charity = require('../models/Charity');


const AuthApi = app => {  
        
//*************************************//Authentification//********************************************
        app.get('/donor/login', (req, res) => {
           res.json({
               message: 'this route needs to be taking care of'
           })
        })

        app.get('/charity/login', (req, res) => {
            res.json({
                message: 'this route needs to be taking care of'
            })
         })
          
        app.post('/donor/login', (req, res) => {
            const donor = {
                Email: req.body.email,
                Password: req.body.password
            }
           

            Donor.getDonorByEmail(donor.Email, (err, user) => {
                if (err) throw err;
        
                Donor.comparePassword(donor.Password, user.Password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch){
                        console.log('Donor login success ', user);
                        jwt.sign({ user_id: user._id } ,'secretkey', (err, token) => {
                            res.json({ token });
                        })
                        
                    } else if (!isMatch){
                        return console.log('Email or Password incorrect!');
                    }
                })
            })
        })

        app.post('/charity/login', (req, res) => {
            const charity = {
                Email: req.body.email,
                Password: req.body.password
            }
           

            Charity.getCharityByEmail( charity.Email , (err, user) => {
                if (err) throw err;
                Charity.comparePassword(charity.Password, user.Password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch){
                        console.log('Charity login success ', user);
                        jwt.sign({ user_id: user._id } ,'secretkey', (err, token) => {
                            res.json({ token });
                        })
                    } else if(!isMatch){
                        return console.log('Email or Password incorrect!')
                    }
                })
            })
        })

      
//*************************************--login/logout routes--********************************************     

        app.get('/logout', (req, res) => {
            req.logout();

            req.flash('success_msg', 'You are logged out');

            res.redirect('/');
        });
//******************************************************************************************************

        return app
}

module.exports = AuthApi;