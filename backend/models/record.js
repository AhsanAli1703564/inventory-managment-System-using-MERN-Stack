const mongoose=require('mongoose')
const {Schema}=mongoose

const modelSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId
        , ref:'user'
    },
    tittle:{type:String,required:true},
    price:{type:Number,required:true},
    pricesold:{type:Number,required:true},
    itemssold:{
   type:Number,required:true
    }
    ,
    totalamount:{type:Number,required:true},
    operator:{type:String,required:true},

    date: { type: Date, default: Date.now }
})
module.exports=mongoose.model('record',modelSchema)