const User = require("../models/User");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
   
    try {

        //generate hashpass
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        //create new user
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        //save user and save response
        const user = await newUser.save();
        res.status(200).json(user);
    }

    catch(err) {
        console.log(err);
    }
});

router.post('/login', async(req,res)=>{
    try
    {
        const user = await User.findOne({email: req.body.email});
    !user && res.status(404).json("User not found");

    const validpassword =await bcrypt.compare(
        req.body.password,
        user.password
    );

    !validpassword && res.status(400).json("Wrong password");

    res.status(200).json(user)
}
catch (err) {
    console.log(err);
    res.status(500).json(err);
}
})

module.exports = router;
