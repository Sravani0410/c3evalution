const mongoose=require("mongoose")
const publicationSchema=mongoose.Schema(
    {
       bookId:{
           type:mongoose.Schema.Types.ObjectId,
           ref:"book",
           required:true,
       }
        
    },{
        timestamp:true,
        versionKey:false,
    }
)
const Publication=mongoose.model("user",publicationSchema)
module.exports=Publication