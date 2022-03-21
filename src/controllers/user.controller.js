const express=require("express")
const {body,validationresult}=require("express-validation")
const User=require("../models/user.model")
const router=express.Router();

router.post(
    "/",
    body("firstName")
    .trim()
    .not()
    .isEmpty()
    .bail()
    .withMessage("firstName should not empty")
    .islength({min:3,max:30})
    .withMessage("first name must be in between 3 to 30 characters"),
   
    body("age")
    .not()
    .isEmpty()
    .bail()
    .withMessage("age should not be empty")
    .isNumeric()
    .withMessage("age should be in between 1 to 150")
    .custom((val)=>{
        if(val<1 || val>150){
          throw error ("Incorrect age")
        }
        return true;
    }),

    async(req,res)=>{
           try{
               const error=validationresult(req);
               if(!error.isEmpty()){
                  return res.status(400).send({errors:error.array()};)
               }
           }
    }
);
