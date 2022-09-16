const express=require('express')
const router=express.Router()
const tems=require('../models/items')
const fetchuser = require('../middleware/fetchuser')
// create application/json parser
const {body,validationResult}=require('express-validator')

 
// create application/x-www-form-urlencoded parser
router.post("/additem",fetchuser,async(req,res)=>{
    try {
        const error=validationResult(req)
        if(!error.isEmpty()){
                res.status(500).send("enter tha data carefully  the tittle and desciption is too short to make meaning")
        }
        const myid=ourId
   const data=await tems.create({
    user:myid,
       tittle:req.body.tittle,
       price:req.body.price,
       totalitems:req.body.totalitems,
       expiry:req.body.expiry
   })
    
    res.json(data)   
} catch (error) {
        console.log(error.message)
    }
    
})


//////////////////get all items and their total amount/////////



router.get("/getall",fetchuser,async(req,res)=>{
    try {
        const idm=ourId 
        // console.log(idm)
                const notes=await tems.find({user:idm})//this user if rom theNOtes ObjectId ,ref:"user"
                console.log(notes)
                res.json(notes)   
} catch (error) {
        res.status(500).send(error)
        
}
  

})
//////////////////////////////////get required data using id
router.get("/findone/:tittle",fetchuser,async(req,res)=>{
    try {
        const tittle=  req.params.tittle
       const note= await tems.find({tittle})
    //     let note= await Notes.findById(req.params.id)
        console.log(note)
        console.log(ourId)
        if(!note){
         return       res.status(404).send("not found")
        }
        
       else{
        res.json(note)
       }
    } catch (error) {
        res.send(error.message)
        res.status(501)
    }
    

})
/////////////////////////////////delete/////////////////////////////////////
router.delete("/remove/:id",fetchuser,async(req,res)=>{
    try {
        let id=req.params.id
        console.log(id)
        res.json("item has been deleted")

        await tems.findByIdAndDelete(id)
    } catch (error) {
        res.send(error.message)
        res.status(501)
    }
   
})
// update using id 
router.patch('/update/:id',fetchuser, async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await tems.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
/////////////////////history

module.exports=router