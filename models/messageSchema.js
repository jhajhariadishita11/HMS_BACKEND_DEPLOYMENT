import mongoose from "mongoose";
import validator from "validator";

const messageSchema=new mongoose.Schema({
    firstName:{
       type:String,
       required:true,
        minLength:[3,"First Nme Must Contain At least 3 characters!"]
    },
    lastName:{
        type:String,
        required:true,
         minLength:[3,"Last Name Must Contain At least 3 characters!"]
     },
     email:{
        type:String,
        required:true,
         validate:[validator.isEmail,"Please provide a valid email"]
     },
     phone:{
        type:String,
        required:true,
         minLength:[10,"Phone no Must Contain exactly 10 characters!"],
         maxLength:[10,"Phone no Must Contain exactly 10 characters!"],
     },
     message:{
        type:String,
        required:true,
         minLength:[10,"Message Must Contain At least 10 characters!"]
     }
})
export const Message=mongoose.model("Message",messageSchema);