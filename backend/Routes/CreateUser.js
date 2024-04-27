const express = require('express');
const user = require('../models/User');
const Router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtoken = "Omkar";
Router.post('/createUser',async(req,res)=>{
    try{
        const {name ,location , email ,password} = req.body;
        if(!name || !location || !email || !password){
            res.status(400),json({
                success:false,
                msg:"Enter the valid fields",
            });
        }
        const salt = await bcrypt.genSalt(10);
        const hash=await bcrypt.hash(password,salt);
        console.log(hash)
        await user.create({
            name:name,
            location:location,
            email:email,
            password:hash,
        });
        
         res.status(200).json({
            success:true,
            msg:"User Created SuccessFully",
        })

    }
    catch(err){
        return res.status(500).json({
            success:false,
            msg:"User is not created Sucessfully"
        })
    }
})

Router.post('/login',async(req,res)=>{
    try{

            const {email,password} = req.body;
            let data = await user.findOne({email});
            if(!data){
                return res.status(400).json({
                    success:false,
                    msg:"Plz enter the valid email",
                })
            }
            const data1 = await bcrypt.compare(password,data.password);
                const info ={
                id:data._id,
                }
                const token = jwt.sign(info,jwtoken);

            if(data1){
            return  res.status(200).json({
                success:true,
                msg:"You are loggged Sucessfully",
                token:token,
            });
        }
        else{
            return res.status(403).json({
                success:false,
                msg:"Plz enter the valid password",
            })
        }
            
    }
    catch(e){
        return res.status(500).json({
            success:false,
            msg:"Internal Server Error",
        });
    }
});

module.exports = Router;