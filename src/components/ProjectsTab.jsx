import Project from "./Project";

function ProjectsTab() {

    let projects = [
        {image: "/me.jpg", title: "First project", link: "google.com", description: "very good description"}
    ]
    
    return(
    <div className="mt-[24px]">
    {projects.map((project, index) => (
        <Project 
        key={index}
        image={project.image}
        title={project.title}
        link={project.link}
        description={project.description} />
    ))}
    
    </div>
    )
}

export default ProjectsTab;