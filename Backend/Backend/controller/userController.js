const {LocalStorage} = require("node-localstorage");
const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require("jsonwebtoken");
const localstorage1 = new LocalStorage("./userid");
const dotenv = require("dotenv");
const { cookie } = require("express-validator");
const uSchema = require("../models/userModel.js");
const saltround = 10;

const userid = ()=>{
    const currentId = parseInt(localstorage1.getItem('Userid') || '1');
    localstorage1.setItem('Userid', currentId + 1);
    return currentId;
}

dotenv.config();
const key = process.env.JWT_SECRET;
const refreshkey = process.env.refresh_token;

const getUser = (async(req,res)=>{
    const userData = await uSchema.find({});
    return res.send(userData);
});

const postUser = (async(req,res)=>{

    const plainPassword = req.body.password;
    const xyz =await bcrypt.hash(plainPassword, saltround);

    console.log(req.body);

    let newid = userid();
    const newUser = new uSchema({
        ...req.body,
        id : newid,
        password : xyz
    })
    await newUser.save();
    res.status(201).json({
  success: true,
  message: "registered successfully"
});
}); 

const userLogin= async(req,res)=>{
    const email = req.body.email;
    const pass = req.body.password;
    const usr1 = await uSchema.findOne({email});
    if(!usr1){
        return res.status(404).json({ "success": false, "message": "User not found" });
    }

    else{
    const compare =await bcrypt.compare(pass,usr1.password);
    
    if(!compare){
        return res.status(400).json({ "success": false, "message": "Incorrect username or password" });
    }
    if(usr1 && compare){
        const payload = {email};
        const token = jwt.sign(payload, key,{
            expiresIn : '1m'
        })

        res.cookie("token",token,{
            maxAge : 2*60*100,
            httpOnly : true,
            secure : true,
            sameSite : "strict"
        })

        return res.status(200).json({
            message : "Login Successful", 
            success : true,
            loginToken : token
        })
    }
    }
}

const logout = async(req,res)=>{
    res.clearCookie("token",{
        httpOnly:true,
        strict:true,
        sameSite:'strict'
    })
    return res.status(200).json({
        success:true,
        message:"logout successfully"
    })
}

const deleteUser = async(req,res)=>{
    const id = req.params.id;
    const deletedItem = await uSchema.findByIdAndDelete(id);
    if(!deletedItem){
        return res.status(404).send("user not found")
    }
    return res.status(200).send(deletedItem);
}

const putUser = async(req,res)=>{
    const id = req.params.id;
    const index = await uSchema.findById(id);
    if(!index){return res.status(404).send("User not found")}
    let {email,password,action} = req.body;
    password = await bcrypt.hash(password,saltround);
    index.email = email
    index.password =  password
    index.action = action
    await index.save()
    return res.json({
        successful : "true",
    })
}

module.exports = {getUser, postUser, userLogin, deleteUser, putUser};

