const paymentApi = require('./payment');
const dbApi = require('./router');


const configureRoutes = app => {
  paymentApi(app);
  dbApi(app);
  // blockApi(app) maybe!
};

module.exports = configureRoutes;