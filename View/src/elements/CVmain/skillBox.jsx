export default function SkillBox({name,style}){
    return(
        <>
         <div className="skill">
          <div className="skill-name">{name}</div>
          <div className="skill-bar">
            <div className="skill-per" style={style}></div>
          </div>
        </div>
        </>
    )
}