if(process.env.NODE_ENV !="production"){
    require('dotenv').config();
    
    }
    
const express=require("express")
const path = require("path");
const methodOveride=require("method-override");
const app=express();
const controller=require("./controllers/controller");
const cors= require("cors")
const coreOptions={
    origin: 'http://localhost:5173', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}
app.use(cors(coreOptions))
app.use(express.urlencoded({extended:true}));
app.use(methodOveride("_method"));


app.post("/home" ,controller.home);
app.listen("8080",controller.port);
