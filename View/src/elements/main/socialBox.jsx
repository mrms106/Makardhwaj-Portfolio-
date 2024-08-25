export default function SocialBox({link,socialClass,icon}){
    return(
        <>
        <a href={link} target="_blank" rel="noopener noreferrer">
                <div className={socialClass}>
                {icon}
                </div>
            </a>
    </>
    )
}