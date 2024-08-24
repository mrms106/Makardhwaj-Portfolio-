const {transporter}=require("./transporter");

function sendmail(form){
    const mailoptions={
        from:process.env.mail,
        to:process.env.mail2,
        subject:"New Form Submmission From Makardhwaj Portfolio",
        text:`The Form Details is as Following 
        name:${form.name},
        email: ${form.mail},
        Message:${form.message}`
    }
    transporter.sendMail(mailoptions,function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log("email sent " + info.response);
        }
    })
}
module.exports={sendmail:sendmail}