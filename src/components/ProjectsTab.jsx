import Project from "./Project";

function ProjectsTab() {

    let projects = [
        {image: "/backend-warmer.png", title: "Backend Warmer", link: "https://github.com/Nilakshhh/Backend-Warmer", description: "Cold starts in AWS Lambda and free-tier backend hosts can delay responses by up to 30 seconds. Using free GitHub Actions to ping the services hourly helps keep them warm and responsive."},
        {image: "/tresses.png", title: "Tresses US", link: "https://tresses.us", description: "A complete commercial scale website, with sales funnel, and a smooth user experience, built for a client in Washington DC."},
        {image: "/2048.png", title: "2048 Game", link: "https://2048-game-two.vercel.app/", description: "Built the classic 2048 game, with authentication, leaderboard functionalities. Wrote classic algorithms involved in the game using javascript."},
        {image: "/pint.png", title: "Pinterest Clone", link: "https://pinterest-clone-jl9s.onrender.com/", description: "Developed a frontend working clone of the famous social media website - Pinterest, applying flexbox, and grid functionalities."},
        {image: "/shannone.png", title: "WSEMQT", link: "https://www.researchgate.net/publication/349460434_WSEMQT_a_novel_approach_for_quality-based_evaluation_of_web_data_sources_for_a_data_warehouse", description: "Worked as a python developer to encode Shannon entropy algorithm for a research paper - WSEMQT"},
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