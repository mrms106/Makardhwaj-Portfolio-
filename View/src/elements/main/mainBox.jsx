import '../../style/mainBox.css'


export default function MainBox(){
    return(
     <>
     <div className="leftmain">
        <div className="leftimagebox">
            <img src="https://st4.depositphotos.com/5934840/27053/v/450/depositphotos_270534534-stock-illustration-businessman-avatar-cartoon-character.jpg" alt="Your Image" />
            {/* <div className="imgagmain"></div> */}
        </div>

        <div className="leftbox">
            <h3 className="name">Makardhwaj Surwase</h3>
            <div className="leftbox1">Web Developer</div>
            <div className="social">
            <a href="https://github.com/mrms106">
                <div className="f sociali">
                <i className="fa-brands fa-github"></i>
                </div>
            </a>
            <a href="https://twitter.com/">
                <div className="t sociali">
                <i className="fa-brands fa-x-twitter"></i>
                </div>
            </a>
            <a href="https://www.instagram.com/mr.ms_106/">
                <div className="i sociali">
                <i className="fa-brands fa-instagram"></i>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/makardhwaj-surwase-0a34b827b/">
                <div className="l sociali">
                <i className="fa-brands fa-linkedin"></i>
                </div>
            </a>
            </div>
            <div className="conatct">
            <div className="contact1">
                <div className="contacticon p">
                <i className="fa-solid fa-mobile-screen"></i>
                </div>
                <div className="conatactdetails">
                <div className="contact1child">phone</div>
                <div className="contact1child2">+91 779831**13</div>
                </div>
            </div>
            <div className="contact1">
                <div className="contacticon e">
                <i className="fa-solid fa-envelope-open-text"></i>
                </div>
                <div className="conatactdetails">
                <div className="contact1child">Email</div>
                <div className="contact1child2">mhs93679@gmail.com</div>
                </div>
            </div>
            <div className="contact1">
                <div className="contacticon lo">
                <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="conatactdetails">
                <div className="contact1child">Location</div>
                <div className="contact1child2">Karve Nager, Pune</div>
                </div>
            </div>
            <div className="contact1" style={{ borderBottom: 'none' }}>
                <div className="contacticon b">
                <i className="fa-regular fa-calendar-days"></i>
                </div>
                <div className="conatactdetails">
                <div className="contact1child">Birthday</div>
                <div className="contact1child2">June 10, 2001</div>
                </div>
            </div>
            </div>
            <div className="cvbox">
            <a href="makardhwaj-cv.pdf" target="_blank" rel="noopener noreferrer">
                Download Cv &nbsp;<i className="fa-solid fa-download"></i>
            </a>
            </div>
        </div>
    </div>

    </>
    )
}