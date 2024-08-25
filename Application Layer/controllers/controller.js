const {sendmail}=require("../mail/sendmail");
const contactMe = require("../module/contactMe");

module.exports.home=async(req,res)=>{
    try{
        console.log("the req is received from client side")
        const form=req.body;
        sendmail(form)
        await  contactMe.create(form)
        console.log("sent")
        res.status(200).send(`the form is submitted`)
    }catch(error){
        console.log(error);
        res.status(500).send("something went wrong ")
    }
    
}
module.exports.port=()=>{
    console.log("running on port 8080");
}