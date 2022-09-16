const express=require('express')
const bodyParser=require('body-parser')
const router=express.Router()
const jsonParser=bodyParser.json()
const model=require('../models/saleshistory')
const fetchuser = require('../middleware/fetchuser')
const {body,validationResult}=require('express-validator')

router.post('/totalsales',fetchuser, async (req, res) => {
    try {
        const id=ourId
         const data=await model.create({
            user:id,
           time:req.body.time,
      totalsales:req.body.totalsales
         })

      

        res.json(data)
        // console.log("i love problem solver")
    }
    catch (error) {
        res.status(400).json({ message: error.message })
        console.log("shit" +error.message)
    }
})
router.get('/getgraph',fetchuser, async (req, res) => {
    try {
        let idm=ourId
         const data=await model.find({user:idm}
        )

      

        res.json(data)
        // console.log("i love problem solver")
    }
    catch (error) {
        res.status(400).json({ message: error.message })
        console.log("shit" +error.message)
    }
})
module.exports=router
