const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        Name:{type:String,required:true},
        Age:{type:Number,required:true},
        Usn:{type:String,required:false}
    }
)
module.exports=mongoose.model('schema',schema)