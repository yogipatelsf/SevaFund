const express = require('express');
const router = express.Router();
const db = require('../models');
const mongoose = require('mongoose');
// const path = require('path');
// const request = require("request");
const bodyParser = require("body-parser");

router.get('/', function(req, res) {
	console.log( 'message: ‘API Initialized!’');
});

router.get('/charities', (req, res) => {
	console.log("get request received")
	db.Charity.find({}).
		then(results => {
			console.log(" get response sent")
			// res.json(results);
		})
});

// router.get('/', (req,res) => {	
// })

// router.get('/', (req,res) => {	
// })

// router.get('/', (req,res) => {	
// })

// router.get('/', (req,res) => {	
// })

// router.get('/', (req,res) => {	
// })




module.exports = router;