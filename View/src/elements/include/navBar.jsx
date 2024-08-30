import '../../style/navbar.css'
import { useNavigate } from 'react-router-dom'
import NavBox from './navbox'

export default function NavBar(){
    const navigate=useNavigate()
    return(
        <>
        <div className="navbox">
            <NavBox
            BoxClick={()=>{navigate('/about')}}
            icon={<i className="fa-regular fa-user"></i>}
            title="About"
             />
             <NavBox
            BoxClick={()=>{navigate('/Resume')}}
            icon={<i className="fa-regular fa-file-lines"></i>}
            title="Resume"
             />
             <NavBox
            BoxClick={()=>{navigate('/projects')}}
            icon={<i className="fa-solid fa-business-time"></i>}
            title="Projects"
             />
             <NavBox
            BoxClick={()=>{navigate('/contactme')}}
            icon={<i className="fas fa-envelope"></i>}
            title="Contact"
             />
        </div>

        </>
    )
}