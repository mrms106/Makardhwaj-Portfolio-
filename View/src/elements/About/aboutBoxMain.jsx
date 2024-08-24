import AboutBox from "./aboutBoxes"
export default function AboutBoxMain(){

    return (
        <>
            <div className="aboutbox">
                <AboutBox
                    boxclass="aboutboxchild"
                    heading="Problem Solver"
                    paragraph=" With a keen eye for detail and a knack for finding elegant solutions, I tackle complex challenges head-on, turning obstacles into opportunities for innovation."
                    icon={<i className="fa-solid fa-globe"></i>}
                />
                <AboutBox
                boxclass="aboutboxchild1"
                paragraph=" Thriving in dynamic team environments, I bring enthusiasm and adaptability to every project, fostering collaboration and driving towards shared goals."
                    heading="Agile Collaborator"
                    icon={  <i className="fa-solid fa-rocket" style={{ color: 'rgba(164, 108, 4, 0.507)' }}></i>  }
                />
                <AboutBox
                boxclass="aboutboxchild1"
                icon={<i className="fa-regular fa-comment" style={{ color: 'rgba(71, 71, 244, 0.566)' }}></i>}
                heading="Clear Communicator"
                paragraph="Expert at conveying project needs, sharing ideas, and giving feedback concisely, fostering seamless collaboration and mutual understanding."
                />
                <AboutBox
                boxclass="aboutboxchild"
                icon={<i className="fa-solid fa-chart-line" style={{ color: 'rgba(233, 65, 65, 0.844)' }}></i>}
                heading="Results-Oriented"
                paragraph=" Driven by a passion for delivering excellence, I focus on tangible results, continuously striving to exceed expectations and achieve measurable success."
                />
            </div>
        </>
    )
}