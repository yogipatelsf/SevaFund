const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const  db = require('../../models');





module.exports =  new LocalStrategy({ 
    usernameField: 'email', 
    passwordField: 'password',
    session: true, 
    passReqToCallback: true 
}, (req, email, password, done) => {
    console.log("charitystrategy engaged")
    const charityData = {
        email: email.trim(),
        password: password.trim()
    }
    return db.Charity.getCharityByEmail({Email: charityData.email}, (err, user) =>  {
            if (err) { return done(err); }
            if (!user) { 
                const error = new Error('Incorrect email or password');
                      error.name = 'IncorrectCredentialsError';

                return done(error);
            }
           
            return db.Charity.comparePassword(charityData.password, user.Password, (err, isMatch) => {
                        if (err) { return done(err); }
                        if(isMatch){
                            return done(null, user);
                        } else {
                            const error = new Error('Incorrect email or password');
                                  error.name = 'IncorrectCredentialsError';
              
                            return done(error);
                        }
            });                  
              
    })
    
});