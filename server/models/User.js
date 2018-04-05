/**
 *
 * Example User model for mongodb
 *
 */

/*
 * 
 * import mongoose from 'mongoose';
 * const Schema = mongoose.Schema;
 *
 * let UserSchema = new Schema({
 *   email: {type: String, required: true, unique: true, dropDups: true},
 *   password: {type: String, required: true},
 *   created_at: {type: Date, default: Date.now},
 *   updated_at: {type: Date},
 *   deleted_at: {type: Date}
 * });
 * export default mongoose.model('User', UserSchema);
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const CharitySchema = new Schema({
	name: {
		type: String,
		required: true
	}
})

const Charity = mongoose.model("Charities", CharitySchema)

exports default Charity;