const express=require('express')
const bodyParser=require('body-parser')
const router=express.Router()
const jsonParser=bodyParser.json()
const model=require('../models/record')
const fetchuser = require('../middleware/fetchuser')
router.post('/history',fetchuser, async (req, res) => {
    try {const id=ourId
         const data=await model.create({
            user:id,
            tittle:req.body.tittle,
       price:req.body.price,
       pricesold:req.body.pricesold,
            itemssold:req.body.itemssold,
            totalamount:req.body.totalamount,
            operator:req.body.operator
         })

      

        res.json(data)
        // console.log("i love problem solver")
    }
    catch (error) {
        res.status(400).json({ message: error.message })
        console.log("shit" +error.message)
    }
})
router.get('/gethistory',fetchuser,async(req,res)=>{
    try {
        const id=ourId
        console.log(id)
        const data=await model.find({user:id})
        console.log(data[0].user.toString())
        // if(id==data[0].user.toString()){
            res.json(data)

        // }
    } catch (error) {
        console.log(error.message)
    }
      
})
/////////////////////////delete a particular item from history
router.delete('/deletehistoryitem/:id',fetchuser,jsonParser,async(req,res)=>{
    try {
      let id=req.params.id
        console.log(id)
        res.json("item has been deleted")
    const dat=await model.findByIdAndDelete(id)
console.log(dat)

    } catch (error) {
        console.log(error.message)
    }
})

    //////////////////////////////////delete complete history
    router.delete('/deletehistory',fetchuser,async(req,res)=>{
        try {
            let data=await model.deleteMany({})
            res.json(data)
        } catch (error) {
            console.log(error.message)
        }
          
    })
      


module.exports=router