const mongoose=require('mongoose')
const [Schema]=mongoose.Schema



const receiptSchema=new Schema ({
    user:{
      type:mongoose.Schema.Types.ObjectId
      , ref:'user'
  },
    bill:{required:true,type:Number},

  
    date: { type: Date, default: Date.now },
    tokennumber:{type:String,unique:true}
    
   
  });
  module.exports=mongoose.model('recipt', receiptSchema);