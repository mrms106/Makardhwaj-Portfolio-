const {sendmail}=require("../mail/sendmail")


module.exports.home=(req,res)=>{
    try{
        console.log("the req is received from client side")
        const form=req.body.form;
        // sendmail(form);
        console.log("sent")
        res.status(200).send("THe email is sent")
    }catch(error){
        console.log(error);
        res.status(500).send("something went wrong ")
    }
    
}
module.exports.port=()=>{
    console.log("running on port 8080");
}