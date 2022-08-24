var express = require('express');
var router = express.Router();
const User = require('../models/User');


//Create a User using: POST "/api/auth/".Doesn't reuire auth
router.post('/', (req, res) => {
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send(user);
})

module.exports = router;