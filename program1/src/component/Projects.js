import './Projects.css';

function Projects(props){
    return(
        <div className="projects">
            <h2>PROJECTS</h2>
            <div className="web">Web Development :{props.web}</div>
            <div className="python">Python :{props.python}</div>
        </div>
    )
}

export default Projects;