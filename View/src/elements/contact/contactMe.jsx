import '../../style/contact.css'
export default function ContactMe(){
    return (
        <>
           <div className="contactmain" id="contact">
  <div className="contctname">Contact Me</div>
  <div className="contctbox">
    <div className="contactheading">
      <p>I'm Always Open To Discussing Product</p>
      <p className="contactpara">design work or partnerships.</p>
    </div>
    <form className="form" method="post" action="/home">
      <input name="form[name]" type="text" placeholder="Name" required />
      <input name="form[email]" type="email" placeholder="E-mail" required />
      <textarea name="form[message]" placeholder="Message" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
  <div className="copyrightcontact">© 2024 All Rights Reserved by Makardhwaj</div>
</div>

        </>
    )
}