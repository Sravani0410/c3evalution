const mongoose=require("mongoose")
const userSchema=mongoose.Schema(
    {
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        age:{type:Number,required:true},
        email:{type:String,required:true},
        
    },{
        timestamp:true,
        versionKey:false,
    }
)
const User=mongoose.model("user",userSchema)
module.exports=User