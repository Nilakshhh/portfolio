import Experience from "./Experience";

function ExperienceTab() {

    let experiences = [
        {title: "First Exp", desc: "Good exp verry very fdjythj hfshtgfg hfsrthnyghhhhhh gdstrhg hktshjhg ytsrth hfstrh hfsehf ghsht  hfsregf hgood exp", position: "Software developer", date: "Mar 24 - Apr 24"},
        {title: "First Exp", desc: "Good exp verry very fdjythj hfshtgfg hfsrthnyghhhhhh gdstrhg hktshjhg ytsrth hfstrh hfsehf ghsht  hfsregf hgood exp", position: "Software developer", date: "Mar 24 - Apr 24"},
        {title: "First Exp", desc: "Good exp verry very fdjythj hfshtgfg hfsrthnyghhhhhh gdstrhg hktshjhg ytsrth hfstrh hfsehf ghsht  hfsregf hgood exp", position: "Software developer", date: "Mar 24 - Apr 24"},
        {title: "First Exp", desc: "Good exp verry very fdjythj hfshtgfg hfsrthnyghhhhhh gdstrhg hktshjhg ytsrth hfstrh hfsehf ghsht  hfsregf hgood exp", position: "Software developer", date: "Mar 24 - Apr 24"},
        {title: "First Exp", desc: "Good exp verry very fdjythj hfshtgfg hfsrthnyghhhhhh gdstrhg hktshjhg ytsrth hfstrh hfsehf ghsht  hfsregf hgood exp", position: "Software developer", date: "Mar 24 - Apr 24"},
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