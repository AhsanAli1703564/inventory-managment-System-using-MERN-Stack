const express=require("express")
const bcrypt=require('bcryptjs')
const router=express.Router()
const {body,validationResult}=require('express-validator')
const User =require ("../models/User")
const JWT = require('jsonwebtoken');
const fetchuser=require('../middleware/fetchuser')
const bodyParser=require('body-parser')
const jsonParser=bodyParser.json()

const JWT_SECRET="ahsanisworkinghard"
router.post("/createUser",[//this is copied and changed after copying from express validator form
  body('name',"enter the valid name").isLength({min:3}),
  body('email',"put the valid email here").isEmail(),
  body('email',"the minimum length for email is 8").isLength({min:8}),


  body('password').isLength({ min: 8 }),

], async(req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
    // res.send()
     //according to the schema mongoose there is format for data but we will also validate
     //  here so that we dont face any errorr in the back end
   //  console.log(req.body) //request ki body main kuch b bhaijny k liye
   //   //  res.json([req.body])
   //   const user=User(req.body)
   //check whether the user with this eamil  exists already
   let user=await  User.findOne({email:req.body.email}) 
   if(user){
     return res.status(400).json("sorry :   this email is taken try another one")
    //  console.log(user) 
   }
   let salt= await bcrypt.genSalt(10)
let secPass=await bcrypt.hash(req.body.password,salt)
   try{ 
    user= await User.create({
    name: req.body.name,
    email:req.body.email,
    password: secPass

  })
  const data={
    id:user.id
  }
 const authToken= JWT.sign(data,JWT_SECRET)
 console.log(authToken)
  // res.json({user})  yeh na kar  k hm token bhaij dain ge
  res.json(authToken)
} catch(error){
    console.error(error.message)
    res.status(500)
    res.send("some error occured")
  }

  // .then(user => res.json(user)).catch(
  //  //the line of code below will give us  custom msg if duplicate values occurs
  // error=>{ console.log(error); res.json ({error:"email is taken" ,message:error})})
  
  
 
// res.send("hello i love you") //is se hamain response main on this link will be seen hello i love you

})
//authenticate a user creating login  /api/auth/login no login required

router.post("/login",jsonParser,[//this is copied and changed after copying from express validator form
  body('password',"enter the valid password").exists(),
  body('email',"enter the valid email").exists()

], async(req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {email,password}=req.body
  try{
   let user=await User.findOne({email})
   if(!user){
     res.status(500).json({sorry:"No such account found"})
   }
   const comp=await bcrypt.compare(password,user.password)
   if(!comp){
     res.json({error:"acount doesn,t exist"})
   }
   else{
    const data={
      id:user.id
    }
   const authToken= JWT.sign(data,JWT_SECRET)
   res.json(authToken)
   console.log(authToken)
   }


  }catch(error){
    
    console.error(error.message)
  
  }
})

//////////////////////////////////////////////////////////////////////////////////////////////////
// route three get user details give it to user login required using token
router.post("/getuser",fetchuser,async(req,res)=>{
 
  // const {email,password}=req.body
try {
//  let ab=fetchuser()
//  console.log(ab)
let bc= ourId
  const user=await User.findById(bc).select("-password")             
  // const data=user.json
  let data=user
  res.send(user)

  console.log(data)
} catch (error) {
  console.error(error.message);
  res.status(500).send("internal server error")

}
})
module.exports = router 