import Experience from "./Experience";

function ExperienceTab() {

    let experiences = [
        {title: "First Exp", bp1: "Good exp verry very good exp", bp2: "goody two shoes, goof fefwbkw", date: "Mar 24 - Apr 24"},
    ]
    
    return(
    <div className="mt-[24px]">
    {experiences.map((experience, index) => (
        <Experience
        key={index}
        title={experience.title}
        bp1 = {experience.bp1}
        bp2 = {experience.bp2}
        date = {experience.date}
        />
    ))}
    
    </div>
    )
}

export default ExperienceTab;