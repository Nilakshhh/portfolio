import Experience from "./Experience";

function ExperienceTab() {

    let experiences = [
        {title: "Development Monitors LLC", desc: "Worked as a software developer, mentoring a team of 6 interns to develop a QGIS plugin, for Birendranagar municipality to map, study interaction of Water Supply system with Eartquake and Landslide risk.", position: "Software developer", date: "April 24 - May 25", desc_sec: "Python - PyQT5, Numpy, Java - XML Processing, PostgreSQL"},
        {title: "Development Monitors LLC", desc: "Working as a full stack intern, part of a team of 4 people, to develop a 3D model for Yemeni cities, to map buildings, population density, terrain, and fluvial flood risks.", position: "Jr. Software developer Intern", date: "Nov 22 - March 24", desc_sec: "ThreeJS, ReactJS, Flask, Data Visualization"},
        {title: "CodeVirus Secuity", desc: "Improved SEO score of landing page to increase user activity, and developed a sales funnel for the company as part of my internship.", position: "Full Stack Web Intern", date: "Aug 22 - Oct 22", desc_sec: "ReactJS, ExpressJS, NodeJS, MongoDB, Authentication, TailwindCSS"},
        {title: "Siren24", desc: "Developed the frontend of the company website for interaction with users.", position: "Frontend Developer Intern", date: "Mar 22 - Jul 22", desc_sec: "Wordpress, Bootstrap CSS"},
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
        desc_sec={experience.desc_sec}
        />
    ))}
    
    </div>
    )
}

export default ExperienceTab;