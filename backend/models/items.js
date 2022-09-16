const mongoose=require('mongoose')
const { Schema } = mongoose;

const itemSchema = new Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId
    , ref:'user'
},
  tittle:{type:String},
  price:{required:true,type:Number},
  totalitems:{type:Number},
  expiry:{type:String},

  date: { type: Date, default: Date.now }
  
 
});
module.exports=mongoose.model('items', itemSchema);