export default function ProjectBox({link,image,heading,paragraph,projectClass}){
    return(
        <>
        <a href={link} target="_blank" rel="noopener noreferrer">
      <div className={projectClass} style={{ width: '18rem' }}>
        <img src={image} alt="SS Fixturing" />
        <div className="card-body">
          <h3>{heading}</h3>
          <p className="card-text">
            {paragraph}
          </p>
        </div>
      </div>
    </a>
        </>
    )
}