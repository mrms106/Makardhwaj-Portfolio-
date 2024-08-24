export default function AboutBox({heading,icon,paragraph,boxclass}){
    return(
        <>
    
                        <div className={boxclass}>
                        <div className="child1">
                           {icon}
                        </div>
                        <div className="child2">
                            <h3>{heading}</h3>
                            <p>
                                {paragraph}
                            </p>
                        </div>
                        </div>
                        
        </>
    )
}