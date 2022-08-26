var express = require('express');
var router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');


//Create a User using: POST "/api/auth/createuser".Doesn't reuire auth
router.post('/createuser', [
    body('name','Your Name should be atleast 3 characters').isLength({
        min: 3
    }),
    body('email','Enter a valid email').isEmail().normalizeEmail(),
    body('password','Password should be atleast 5 characters').isLength({
        min: 5
    })

] , async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Check whether the user with this email exists already
    try {
        let user = await User.findOne({email : req.body.email})
        if(user){
            res.status(400).json({error : "Sorry! User with this email already exists"})
        }
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        // .then(user => res.json(user))
        // .catch(err => {
        //     console.log(err)
        //     res.json({error : "Please enter unique value for key", message : err.message})
        // });
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
    
    
})

module.exports = router;