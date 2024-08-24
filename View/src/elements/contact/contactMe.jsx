import { useState } from 'react'
import '../../style/contact.css'
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
    try{
      const responce= await fetch("http://localhost:8080/7798366613242993/home",{
        method:"POST",
        headers:{
           'Content-Type': 'application/json'
        },
        body:JSON.stringify(form)
      })
      if(responce.ok){
        alert("form is submmited")
        setform({
          name:"",
          email:"",
          message:""
        })
      }else{
        alert("error in submmission")
      }
    }catch(err){
      alert("something went wrong",err)
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