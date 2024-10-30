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
                    I'm Makardhwaj, a full stack web and mobile app developer with a passion for crafting seamless digital experiences. Skilled in HTML, CSS, JavaScript, Bootstrap, Node.js, Express.js, MongoDB, and React.js for web development, and React Native for mobile, I bring ideas to life across platforms. Let’s create something remarkable together!
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