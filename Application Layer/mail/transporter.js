const nodemailer=require("nodemailer");

const transporter=nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:process.env.mail,
        pass:process.env.pass
    }
    
});
module.exports={transporter}