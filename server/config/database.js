/**
 *
 * Database Config
 * Examples:
 */

/*
 * MongoDB
 * import mongoose from 'mongoose';
 * import env from './env';
 * const dbHost = {
 *  dev: 'xxxxxx',
 *  production: 'xxxxx'
 * };
 * mongoose.connect(dbHost[env.name]);
 * mongoose.Promise = require('bluebird');
 */

// import env from './env'; 
const mongoose = require('mongoose');

const  MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/SevaFund";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


