export default function InfoBox({infoclass,icon,title,info,style}){
    return(
        <>
        <div className="contact1" style={style}>
                <div className={infoclass}>
                {icon}
                </div>
                <div className="conatactdetails">
                <div className="contact1child">{title}</div>
                <div className="contact1child2">{info}</div>
                </div>
            </div>
        </>
    )
}