// const { header } = require('express-validator');
const JWT = require('jsonwebtoken');
const JWT_SECRET="ahsanisworkinghard"

const fetchuser=(req,res,next)=>{
    const token=req.header('auth-token');
    if(!token){
        res.status(401).send({error:"please authenticate antering a valid token"});

    //get the user from jwt token and add id to req Object
}

    try{
       const  data=JWT.verify(token,JWT_SECRET);
        ourId=data.id
    //    console.log(user)
        // return dem
    next();

    }catch(error){
res.status(401).send({error:"authenticate with valid token"})
    }
   
}

module.exports=fetchuser