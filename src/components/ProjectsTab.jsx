import Project from "./Project";

function ProjectsTab() {

    let projects = [
        {image: "/artms.png", title: "ARTMS", link: "#", description: "Asset, Risk and Terrain Mapping System is a QGIS plugin, built to aid municipalities to study and analyse water supply system assets at risk of flood and earthquakes."},
        {image: "/2048.png", title: "2048 Game", link: "https://2048-game-two.vercel.app/", description: "Built the classic 2048 game, with authentication, leaderboard functionalities. Wrote classic algorithms involved in the game using javascript."},
        {image: "/pinterest.png", title: "Pinterest Clone", link: "https://pinterest-clone-jl9s.onrender.com/", description: "Developed a frontend working clone of the famous social media website - Pinterest, applying flexbox, and grid functionalities."},
        {image: "/shannon.png", title: "WSEMQT", link: "https://www.researchgate.net/publication/349460434_WSEMQT_a_novel_approach_for_quality-based_evaluation_of_web_data_sources_for_a_data_warehouse", description: "Worked as a python developer to encode Shannon entropy algorithm for a research paper - WSEMQT"},
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