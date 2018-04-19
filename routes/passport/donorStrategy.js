const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const  db = require('../../models');




module.exports =  new LocalStrategy({ 
    usernameField: 'email', 
    passwordField: 'password',
    session: true, 
    passReqToCallback: true 
}, (req, email, password, done) => {
    const donorData = {
        email: email.trim(),
        password: password.trim()
    }
    //need to implement our schema
        console.log('donor strategy reached ', donorData);
      return  db.Donor.getDonorByEmail({Email: donorData.email}, (err, user) => {
                    if (err) { return done(err); }
                    if(!user){
                        const error = new Error('Incorrect email or password');
                              error.name = 'IncorrectCredentialsError';
        
                        return done(error);
                    }
            //need to implement our schema
          return  db.Donor.comparePassword(donorData.password, user.Password, (err, isMatch) => {
                        if (err) { return done(err); }
                        if(isMatch){
                            return done(null, user);
                        } else {
                            const error = new Error('Incorrect email or password');
                                  error.name = 'IncorrectCredentialsError';
                    
                            return done(error);
                        }
                    });
    });
});