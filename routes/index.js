const paymentApi = require('./payment');
const dbApi = require('./router');
const passportApi = require('./passport');


const configureRoutes = app => {

    paymentApi(app);
    dbApi(app);
    passportApi(app);
 // blockchainApi(app) // maybe!
};

module.exports = configureRoutes;