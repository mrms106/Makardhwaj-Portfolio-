import SkillBox from "./skillBox"
export default function SkillBoxMain(){
    return(
        <> 
             <div className="skillbox">
                <div className="skillname">Skills</div>
                <div className="skillboxchild1">
                    <div className="skillboxchild1-1">
                        <SkillBox
                        name="HTML"
                        style={{ maxWidth: '90%', background: 'rgba(250, 50, 50, 0.697)' }}
                        />
                        <SkillBox
                        name="CSS"
                        style={{ maxWidth: '75%', background: 'rgba(128, 0, 128, 0.649)' }}
                        />
                        <SkillBox
                        name="Javascript"
                        style={{ maxWidth: '68%', background: 'rgba(65, 65, 254, 0.549)' }}
                        
                        />
                        <SkillBox
                        name="Bootstrap"
                        style={{ maxWidth: '60%', background: 'rgba(213, 29, 213, 0.566)' }}
                            />
                        <SkillBox
                        name="ReactJs"
                        style={{ maxWidth: '70%', background: 'rgba(151, 56, 56, 0.533)' }}
                        />
                        <SkillBox
                        name="Git"
                        style={{ maxWidth: '60%', background: 'rgba(57, 57, 141, 0.499)' }}
                        />
                    </div>
                    <div className="skillboxchild1-1">
                        <SkillBox
                        name="NodeJs"
                        style={{ maxWidth: '70%', background: 'rgba(151, 56, 56, 0.533)' }}
                        />
                        <SkillBox
                        name="MongoDB"
                        style={{ maxWidth: '70%', background: 'rgba(57, 57, 141, 0.499)' }}
                        />
                        <SkillBox
                        name="SQL"
                        style={{ maxWidth: '70%', background: 'rgba(213, 29, 213, 0.566)' }}
                            />
                        <SkillBox
                        name="JAVA"
                        style={{ maxWidth: '50%', background: 'rgba(65, 65, 254, 0.549)' }}
                        />
                        <SkillBox
                        name="React-Native"
                        style={{ maxWidth: '70%', background: 'rgba(128, 0, 128, 0.649)' }}
                        />
                        <SkillBox
                        name="Github"
                        style={{ maxWidth: '80%', background: 'rgba(250, 50, 50, 0.697)' }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}