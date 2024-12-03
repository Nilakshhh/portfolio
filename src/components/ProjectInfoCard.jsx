import Heading from "./Heading";
import ProjectsTab from "./ProjectsTab";

function ProjectInfoCard() {
    return (
        <>
            <Heading text1="recent" text2="projects" className=""/>
            <ProjectsTab />
        </>
    )
}

export default ProjectInfoCard;