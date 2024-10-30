import '../../style/mainBox.css'
import ScoialMainBox from './MainSocialBox'
import MainInfoBox from './MainInfoBox'
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
            <div className="leftbox1">Web & APP Developer</div>
            <div className="social">
               <ScoialMainBox/>
            </div>
            <div className="conatct">
            <MainInfoBox/>
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