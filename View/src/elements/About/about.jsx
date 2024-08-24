import '../../style/about.css'
import AboutBoxMain from './aboutBoxMain'
export default function About(){
    return(
        <>
            <div className="rightboxmain">
                <div className="rightbox" id="about">
                    <h2>About</h2>
                    <p>
                    🚀 Welcome to my corner of the digital universe! 🌟<br /><br />
                    I'm Makardhwaj, a passionate full stack web developer with an insatiable curiosity for crafting remarkable digital experiences. Armed with an arsenal of technologies including HTML, CSS, Node.js, JavaScript, MongoDB, Express.js, Bootstrap, and React.js, I embark on journeys through code to bring visions to life.
                    </p>
                    <div className="rightboxb1">
                        <h3>What I Do!</h3>
                        
                            <AboutBoxMain/>
                    </div>
                </div>
            </div>

        </>
    )
}