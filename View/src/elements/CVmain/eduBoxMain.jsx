import EduBox from "./eduBox"
export default function EduBoxMain(){
    return(
        <>
            <div className="maincvbox">
                <div className="education">
                    <h2>
                        <i className="fa-solid fa-graduation-cap" style={{ color: 'rgba(26, 26, 255, 0.741)' }}></i>&nbsp;&nbsp; Education
                    </h2>
                    <EduBox
                        eduClass="edubox"
                        year="2022-2024"
                        eduheading="MSC in Computer Science,"
                        edupara="from College of Computer Science and Information Technology, Latur."
                        />
                    <EduBox
                    eduClass="edubox edubg"
                    year="2019-2022"
                    eduheading="BSc in Computer Science,"
                    edupara="from College of Computer Science and Information Technology, Latur."
                    />
                </div>
                <div className="courses">
                    <h2>
                        <i className="fa-solid fa-laptop-code" style={{ color: 'rgba(26, 26, 255, 0.741)' }}></i>&nbsp;&nbsp;Courses
                    </h2>
                    <EduBox
                    eduClass="coursebox edubg"
                    year="April-2023"
                    eduheading="Full Stack Java,"
                    edupara="from Profound Edutech, Pune."
                    />
                    <EduBox
                    eduClass="coursebox coursebg"
                    year="March-2024"
                    eduheading="Web Development,"
                    edupara="from Apna College."
                    />
                </div>
            </div>
        </>
    )
}