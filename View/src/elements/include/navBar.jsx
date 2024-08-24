import '../../style/navbar.css'
import { useNavigate } from 'react-router-dom'

export default function NavBar(){
    const navigate=useNavigate()
    return(
        <>
        <div className="navbox">
            <div className="about navbox1" onClick={()=>{navigate('/')}} >
                <i className="fa-regular fa-user"></i><span>About</span>
            </div>
            <div className="resume navbox1" onClick={()=>{navigate('/Resume')}}>
                <i className="fa-regular fa-file-lines"></i><span>Resume</span>
            </div>
            <div className="project navbox1" onClick={()=>{navigate('/projects')}}>
                <i className="fa-solid fa-business-time"></i><span>Projects</span>
            </div>
            <div className="contactme navbox1" onClick={()=>{navigate('/contactme')}}>
                <i className="fas fa-envelope"></i><span>Contact</span>
            </div>
        </div>

        </>
    )
}