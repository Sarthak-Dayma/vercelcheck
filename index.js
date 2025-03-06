import express from "express"
const app = express();
import mongoose from "mongoose";
import router from "./Routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

mongoose.connect("mongodb://127.0.0.1:27017/demo4",{
}).then(()=>{
    console.log("Connection Successful");
 }).catch((e)=>{
    console.log(e);
 });

 app.use(bodyParser.json({extended :true}));
 app.use(bodyParser.urlencoded({extended :true}));
 app.use(cors());
   app.use('/',router);

  app.listen(8001   ,()=> console.log("Server is running on port 8000"));

 