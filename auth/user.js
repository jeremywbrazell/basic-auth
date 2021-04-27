'use strict'

const Users = require('../schema.js');
const bcrypt = require('bcrypt'); 
const auth = require('../basicAuth.js');

const express = require('express'); 
const useRouter = express.Router();


useRouter.post('/signup', async (req, res, next) => {
    try {
        console.log(req.body);
        req.body.password = await bcrypt.hash(req.body.password, 5);
        let userObject = {
            username: req.body.username,
            password: req.body.password
        }
        const user = await new Users(userObject);
        const record = await user.save();
        res.status(201).json(record);
    } catch (e) { res.status(403).send("Error Creating User"); }
});

useRouter.post('/signin', auth, async (req, res) => {
    res.status(200).json(req.user);
})

module.exports = useRouter;