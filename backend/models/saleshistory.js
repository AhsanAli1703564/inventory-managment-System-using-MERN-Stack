const mongoose=require('mongoose')
const {Schema}=mongoose

const graphSchema=new Schema({
   user:{
      type:mongoose.Schema.Types.ObjectId
      , ref:'user'
  },
   time:{type:String,required:true},
   totalsales:{
    type:Number,required:true
   }
})
module.exports=mongoose.model('graph',graphSchema)