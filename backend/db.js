const mongoose=require('mongoose')
const uri="mongodb://localhost:27017/junaid"
const connectToMongo=()=>{
    mongoose.connect(uri,()=>{
        console.log("connected to database")
    })
}
module.exports=connectToMongo