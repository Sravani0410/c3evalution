const express=require("express")
const connect=require("./configs/db")
const app=express();
app.use(express.json())
app.listen(4050,async()=>{
  try{
      await connect();
   console.log("listening to port 4050")
  }
  catch(err){
      console.log(err.message)
  }
})