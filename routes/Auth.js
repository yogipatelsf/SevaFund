
const  Donor = require('../models/Donor');
const  Charity = require('../models/Charity');


const AuthApi = app => {  
        
//*************************************//Authentification//********************************************
        app.get('/donor/login', (req, res) => {
           Donor.findAll({})
                .then(doner => res.json(donor))
                .catch(err => res.status(422).json(err))
        })

        app.get('/charity/login', (req, res) => {
            Charity.findAll({})
                 .then(doner => res.json(donor))
                 .catch(err => res.status(422).json(err))
         })
          
        app.post('/donor/login', (req, res) => {
            const donor = {
                Email: req.body.email,
                Password: req.body.password
            }
            console.log('Donor login ', donor)

            Donor.getDonorByEmail(donor.Email, (err, user) => {
                if (err) throw err;
        
                Donor.comparePassword(donor.Password, user.Password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch){
                        return console.log('Donor login success ', user);
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
            console.log('Charity login ', charity)

            Charity.getCharityByEmail( charity.Email , (err, user) => {
                if (err) throw err;
                Charity.comparePassword(charity.Password, user.Password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch){
                        return console.log('Charity login success ', user);
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