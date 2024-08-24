export default function EduBox({eduClass,year,eduheading,edupara}){
    return(
        <>
           <div className={eduClass}>
        <div className="eduboxchild">
          <div className="year">{year}</div>
          <div className="edupara">{eduheading}</div>
          <div className="edupara2">{edupara}</div>
        </div>
      </div>
        </>
    )
}