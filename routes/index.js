const paymentApi = require('./payment');
const dbApi = require('./router');
const AuthApi = require('./Auth');


const configureRoutes = app => {
    paymentApi(app);
    dbApi(app);
    AuthApi(app);
 // blockchainApi(app) // maybe!
};

module.exports = configureRoutes;