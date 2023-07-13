const express = require("express")

const addUser = async(req,res,next) => {
    const{username, password} = req.body;
    let user;
    try{
        user = new User({
            username: req.body.username,
            password: req.body.password
        })
        console.log(user)
        user = await user.save();
        if (!user){
            return res.send("Failed to add user")
        }
    }
    catch(err){
        return res.status(500).send("Server Error")

    }
}

exports.addUser = addUser;


