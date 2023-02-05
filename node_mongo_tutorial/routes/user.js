const express = require("express");
const router = express.Router();
const userpostii = require('../models/userpost')

router.get("/", async (req,res)=>{
    try{
     const userposts =await userpostii.find();
     res.json(userposts)
    }catch{
        res.json({mess:err})

    }
})
router.post('/', async(req,res)=>{
    const user = new userpostii({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        cpassword:req.body.cpassword,

    })
    try{
        const signupPost =await user.save();
        res.json(signupPost)
    }
    catch{
        res.json({mess:err})
    }
})
module.exports=router;
