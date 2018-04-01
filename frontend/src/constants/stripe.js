const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
    ? 'pk_live_MY_PUBLISHABLE_KEY'
    : 'pk_test_Waw8V0hzaLiVd6xywATpe3F1';

export default STRIPE_PUBLISHABLE;