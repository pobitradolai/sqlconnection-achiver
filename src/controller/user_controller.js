const dao = require('../dao/user_dao');
const common = require('../services/commonService');
const express = require('express');
const router = express.Router();

module.exports = router;

//
router.post('/addUser', async (req, res) => {
	try{
		
		const result = await dao.addUser(req.body);
		//console.log(result)
		if (result.error) {
			res.send(common.sendResponse(false, 0, 'Some error occurred', null, 500));
		} else {
			let message = 'Added Succesfully';
			res.send(common.sendResponse(true, 1, message, result, 0));
		}
	} catch(e) {
        console.log(e)
        res.send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
	}
});

router.post('/userLogin', async (req, res) => {
	try{
		if (req.body.userEmail === undefined || req.body.UserPassword === undefined) {
			res.send(common.sendResponse(false, 0, 'user password missing', null, 401))
		} else {
			
			const result = await dao.userLogin(req.body);
			if (result.error) {
				res.send(common.sendResponse(false, 0, 'Some error occurred', null, 500));
			} else {
				let message = 'User found.'
				if (result.length==0) {
					message = 'Wrong email or password'
					res.send(common.sendResponse(false, 1, message, null, 0));
				}else{
					res.send(common.sendResponse(true, 1, message, result[0], 0));
				}
				
			}
		}
	} catch(e) {
        console.log(e)
        res.send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
	}
});
//
router.post('/allUser', async (req, res) => {
	try{
		
		const result = await dao.allUser(req.body);
		//console.log(result)
		if (result.error) {
			res.send(common.sendResponse(false, 0, 'Some error occurred', null, 500));
		} else {
			let message = 'Users Found!';
			res.send(common.sendResponse(true, 1, message, result, 0));
		}
	} catch(e) {
        console.log(e)
        res.send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
	}
});