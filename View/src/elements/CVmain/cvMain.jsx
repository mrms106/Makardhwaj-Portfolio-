import '../../style/cv.css'
import SkillBoxMain from './skillBoxMain'
import EduBoxMain from './eduBoxMain'
export default function CvMain(){
    return(
        <>
 <div className="cvmain" id="resume" >
  <div className="cvmbox">
    <h2>Resume</h2>
  </div>
  
    <EduBoxMain/>
    
    <SkillBoxMain/>
  <div className="copyright">© 2024 All Rights Reserved by Makardhwaj</div>
</div>

        </>
    )
}