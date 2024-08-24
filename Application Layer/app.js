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
    origin: 'https://www.makardhwaj.rf.gd', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}
app.use(express.json())
app.use(cors(coreOptions))
app.use(express.urlencoded({extended:true}));
app.use(methodOveride("_method"));


app.post("/7798366613242993/home" ,controller.home);
app.listen("8080",controller.port);
