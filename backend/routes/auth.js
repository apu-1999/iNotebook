var express = require('express');
var router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');


//Create a User using: POST "/api/auth/".Doesn't reuire auth
router.post('/', [
    body('name','Your Name should be atleast 3 characters').isLength({
        min: 3
    }),
    body('email','Enter a valid email').isEmail().normalizeEmail(),
    body('password','Password should be atleast 5 characters').isLength({
        min: 5
    })

] , (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then(user => res.json(user))
    .catch(err => {
        console.log(err)
        res.json({error : "Please enter unique value for key", message : err.message})
    });
    
    
    
})

module.exports = router;