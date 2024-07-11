import mongoose from "mongoose";

export const dbConnection= ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM_DEPLOYED"
    }).then(()=>{
        console.log("connected to db")
    }).catch(err=>{
        console.log(`Some error occured while connecting to db:&{err}`);
    })
}