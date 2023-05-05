import mongoose from "mongoose";
import UserModel from "../Models/UserModel.js"

import { HashPassword, comaparepassword } from "../helpers/hashpass.js";
import generateToken from "../Config/GenrateToken.js"
import e from "express";

export const SignupController = async (req , res)=>{
    const { password , name  ,email , pic } = req.body ; 

    const presentUser = await UserModel.findOne({ email });
    if (presentUser) {
      return res.status(300).send({
        succes: true,
        massage: "user is alredy registered"
      })    

    }

    //hash passwod 
const hash = await HashPassword(password)
 
//create the signup user 
 //save 
 const user = await new UserModel({
    name,
    email,

    password: hash,
    pic
  })
  user.save()

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      password:hash,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
};

//This is the Login Controller 

export const LoginController = async (req, res )=>{
    const {email , password } = req.body ; 

  const user = await UserModel.findOne({ email });
  if(!user){
    res.send({
        massage:"user not found"
    })
  }

  console.log("userlofout" ,user)
  if(user){
    const match = await comaparepassword(password, user.password)
    console.log("match=>", match)
    if(!match )
  {
      res.status(300).send({
      succes:false , 
      massage:"unValid details "
  })
  
  }
const token = generateToken(user._id)
  res.status(200).send({
    succes:"true",
    massage:"login succesfull",
    User:{
      name:user.name,
      email:user.email,

    },
    token
   })


  }


}

//get the all the user data 

export const getController = async (req , res)=>{

try {
    const data = await UserModel.find({})
    if(data){
res.send({
    sucess:true ,
    data
})
    }

    
} catch (error) {
    console.log("error " , error)
    
}    
}


//get all users 

export const Allusers = async(req , res)=>{
    
    const keyword = req.query.search?{
        $or:[
            {name:{$regex: req.query.search , $options:"i"}},
            {email:{$regex: req.query.search , $options:"i"}},
        ],
    
        
    }: res.send({massage:"dalser"});
    // console.log( "keyword"  , keyword)
    
    const users = await UserModel.find(keyword).find({ _id: { $ne: req.user._id } });
    console.log("usere" , users)
    res.send(users)



}