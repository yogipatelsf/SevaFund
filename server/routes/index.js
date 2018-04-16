const paymentApi = require('./payment');
const dbApi = require('./router');


const configureRoutes = app => {

    paymentApi(app);
    dbApi(app);
 // blockchainApi(app) // maybe!
};

module.exports = configureRoutes;