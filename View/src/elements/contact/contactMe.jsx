import { useState } from 'react'
import '../../style/contact.css'
import Swal from 'sweetalert2'

export default function ContactMe(){
  const [form, setform]=useState({
    name:"",
    email:"",
    message:""
  })
  const onInputChange=(event)=>{
    setform({...form,[event.target.name]:event.target.value})
  }
  console.log(form)
  const onFormSubmit= async(event)=>{
    event.preventDefault()
    Swal.fire({
      title: 'Sending...',
      html: 'Please wait For few Seconds',
      allowOutsideClick: false,
      didOpen: () => {
          Swal.showLoading()
      }
  });
    try{
      const responce= await fetch("http://localhost:8080/home",{
        method:"POST",
        headers:{
           'Content-Type': 'application/json'
        },
        body:JSON.stringify(form)
      })
      if(responce.ok){
        Swal.fire({
          icon: "success",
          title: "Thank You...",
          text: "You responce is sent",
          footer: 'We will get back to you in 1 working day',
          timer: 10000,
          timerProgressBar: true,
        });
        setform({
          name:"",
          email:"",
          message:""
        })
      }else{
        Swal.fire({
          icon: "error",
          title: "Error in submission",
          text: "Please try again.. ",
        });
      }
    }catch(err){
      Swal.fire({
        icon: "error",
        title: "The server is Busy",
        text: "Please contact throw E-mail ",
      });
      console.log(err)
    }
  }
    return (
        <>
           <div className="contactmain" id="contact">
  <div className="contctname">Contact Me</div>
  <div className="contctbox">
    <div className="contactheading">
      <p>I'm Always Open To Discussing Product</p>
      <p className="contactpara">design work or partnerships.</p>
    </div>
    <form className="form" onSubmit={onFormSubmit}  onChange={onInputChange}>
      <input name="name" type="text" placeholder="Name" required  value={form.name}/>
      <input name="email" type="email" placeholder="E-mail" required  value={form.email}/>
      <textarea name="message" placeholder="Message" required value={form.message}></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
  <div className="copyrightcontact">© 2024 All Rights Reserved by Makardhwaj</div>
</div>

        </>
    )
}