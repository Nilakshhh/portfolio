import Experience from "./Experience";

function ExperienceTab() {

    let experiences = [
        {title: "Development Monitors LLC", desc: "Worked as a software developer, mentoring a team of 6 interns to develop a QGIS plugin, for Shimla and Aizawl municipalities to map, study interaction of Water Supply system with Eartquake and Landslide risk.", position: "Software developer", date: "April 24 - Present"},
        {title: "Development Monitors LLC", desc: "Working as a full stack developer, part of a team of 4 people, to develop a 3D model for Yemeni cities, to map buildings, population density, terrain, and fluvial flood risks.", position: "Jr. Software developer", date: "Nov 22 - March 24"},
        {title: "CodeVirus Secuity", desc: "Improved SEO score of landing page to increase user activity, and developed a sales funnel for the company as part of my internship.", position: "Full Stack Web Intern", date: "Jun 22 - Aug 22"},
        {title: "Siren24", desc: "Developed the frontend of the company website for interaction with users.", position: "Frontend Developer Intern", date: "Mar 22 - May 22"},
    ]
    
    return(
    <div className="mt-[24px]">
    {experiences.map((experience, index) => (
        <Experience
        key={index}
        title={experience.title}
        desc = {experience.desc}
        position = {experience.position}
        date = {experience.date}
        />
    ))}
    
    </div>
    )
}

export default ExperienceTab;