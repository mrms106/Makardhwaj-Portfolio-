import '../../style/cv.css'
export default function CvMain(){
    return(
        <>
 <div className="cvmain" id="resume" >
  <div className="cvmbox">
    <h2>Resume</h2>
  </div>
  <div className="maincvbox">
    <div className="education">
      <h2>
        <i className="fa-solid fa-graduation-cap" style={{ color: 'rgba(26, 26, 255, 0.741)' }}></i>&nbsp;&nbsp; Education
      </h2>
      <div className="edubox">
        <div className="eduboxchild coursebg">
          <div className="year">2022-2024</div>
          <div className="edupara">MSC in Computer Science,</div>
          <div className="edupara2">from College of Computer Science and Information Technology, Latur.</div>
        </div>
      </div>
      <div className="edubox edubg">
        <div className="eduboxchild">
          <div className="year">2019-2022</div>
          <div className="edupara">BSc in Computer Science,</div>
          <div className="edupara2">from College of Computer Science and Information Technology, Latur.</div>
        </div>
      </div>
    </div>
    <div className="courses">
      <h2>
        <i className="fa-solid fa-laptop-code" style={{ color: 'rgba(26, 26, 255, 0.741)' }}></i>&nbsp;&nbsp;Courses
      </h2>
      <div className="coursebox edubg">
        <div className="eduboxchild">
          <div className="year">April-2023</div>
          <div className="edupara">Full Stack Java,</div>
          <div className="edupara2">from Profound Edutech, Pune.</div>
        </div>
      </div>
      <div className="coursebox coursebg">
        <div className="eduboxchild">
          <div className="year">March-2024</div>
          <div className="edupara">Web Development,</div>
          <div className="edupara2">from Apna College.</div>
        </div>
      </div>
    </div>
  </div>
  <div className="skillbox">
    <div className="skillname">Skills</div>
    <div className="skillboxchild1">
      <div className="skillboxchild1-1">
        <div className="skill">
          <div className="skill-name">HTML</div>
          <div className="skill-bar">
            <div className="skill-per" style={{ maxWidth: '90%', background: 'rgba(250, 50, 50, 0.697)' }}></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-name">CSS</div>
          <div className="skill-bar">
            <div className="skill-per" style={{ maxWidth: '75%', background: 'rgba(128, 0, 128, 0.649)' }}></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-name">Javascript</div>
          <div className="skill-bar">
            <div className="skill-per" style={{ maxWidth: '68%', background: 'rgba(65, 65, 254, 0.549)' }}></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-name">Bootstrap</div>
          <div className="skill-bar">
            <div className="skill-per" style={{ maxWidth: '60%', background: 'rgba(213, 29, 213, 0.566)' }}></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-name">ReactJs</div>
          <div className="skill-bar">
            <div className="skill-per" style={{ maxWidth: '60%', background: 'rgba(151, 56, 56, 0.533)' }}></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill-name">Git</div>
          <div className="skill-bar">
            <div className="skill-per" style={{ maxWidth: '60%', background: 'rgba(57, 57, 141, 0.499)' }}></div>
          </div>
        </div>
      </div>
      <div className="skillboxchild1-1">
        <div className="skill">
          <div className="skill-name">NodeJs</div>
          <div className="skill-bar">
            <div className="skill-per" style={{ maxWidth: '70%', background: 'rgba(151, 56, 56, 0.533)' }}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">MongoDB</div>
          <div className="skill-bar">
            <div className="skill-per" style={{ maxWidth: '70%', background: 'rgba(57, 57, 141, 0.499)' }}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">SQL</div>
          <div className="skill-bar">
            <div className="skill-per" style={{ maxWidth: '70%', background: 'rgba(213, 29, 213, 0.566)' }}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">Python</div>
          <div className="skill-bar">
            <div className="skill-per" style={{ maxWidth: '70%', background: 'rgba(65, 65, 254, 0.549)' }}></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-name">Java</div>
          <div className="skill-bar">
            <div className="skill-per" style={{ maxWidth: '60%', background: 'rgba(128, 0, 128, 0.649)' }}></div>
          </div>
        </div>
        <div className="skill" style={{ marginBottom: '2rem' }}>
          <div className="skill-name">Github</div>
          <div className="skill-bar">
            <div className="skill-per" style={{ maxWidth: '80%', background: 'rgba(250, 50, 50, 0.697)' }}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright">© 2024 All Rights Reserved by Makardhwaj</div>
</div>

        </>
    )
}