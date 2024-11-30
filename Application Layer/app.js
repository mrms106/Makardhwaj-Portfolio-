if(process.env.NODE_ENV !="production"){
    require('dotenv').config();
    
    }
    
const express=require("express")
const path = require("path");
const methodOveride=require("method-override");
const app=express();
const controller=require("./controllers/controller");
const cors= require("cors")
const mongoose =require("mongoose")
const mongodb=require("mongodb")
const coreOptions={
    origin: 'http://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}
app.use(express.json())
app.use(cors(coreOptions))
app.use(express.urlencoded({extended:true}));
app.use(methodOveride("_method"));

// const dburl=process.env.dburl
const dburl='mongodb://127.0.0.1:27017/portfolio'


main( console.log("the database is connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect(dburl);
}

app.post("/api/contact/88937391237329389183" ,controller.home);
app.listen("8080",controller.port);
