export default function NavBox({BoxClick,icon,title}){
    return(
        <>
          <div className="navbox1" onClick={BoxClick} >
                {icon}<span>{title}</span>
            </div>
        </>
    )
}