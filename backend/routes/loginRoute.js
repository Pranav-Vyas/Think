const express = require("express");
const User = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");

// router.post("/", async (req, res) =>{
//     console.log(req.body);
//     const data = {
//         username: req.body.username
//     }
//     data.password = await bcrypt.hash(req.body.password, 10);
//     User.create(data)
//     .then(async (user) => {
//         console.log("admin created");
//         return res.status(200).json({user: user});
//     }).catch((err) => {
//         console.log(err);
//         res.sendStatus(400);
//     })

// })

router.post("/", async (req, res) =>{
    const {username, password} = req.body;
    if (username && password) {
        const foundUser = await User.findOne( {username:username} );
        if (foundUser) {
            var result = await bcrypt.compare(password, foundUser.password);
            if (result === true) {
                const token = await foundUser.generateAuthToken();
                return res.status(200).json({user: foundUser, token: token});
            }
        }
        return res.status(400).json({user: false});
    }
    return res.status(400).json({user: false});
})



module.exports = router;