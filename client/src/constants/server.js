const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
    ? 'https://morning-falls-62928.herokuapp.com/'
    : 'http://localhost:8080';

export default PAYMENT_SERVER_URL;