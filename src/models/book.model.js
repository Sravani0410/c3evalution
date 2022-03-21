const mongoose=require("mongoose")
const bookSchema=mongoose.Schema(
    {
        content:{type:String,required:true},
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
        }
        
    },{
        timestamp:true,
        versionKey:false,
    }
)
const Book=mongoose.model("book",bookSchema)
module.exports=Book