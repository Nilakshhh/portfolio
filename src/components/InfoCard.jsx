import Heading from "./Heading";
import Text from "./Text";
import NumberCard from "./NumberCard"
import ProjectsTab from "./ProjectsTab";
import ExperienceTab from "./ExperienceTab";
import Skill from "./Skill"

function InfoCard() {
    var intro = "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products."
    return (
        <>
            <Heading text1="SOFTWARE" text2="ENGINEER"/>
            <Text text={intro} />
            <NumberCard />
            <Heading text1="recent" text2="projects" className="mt-[60px] sm:mt-[84px]"/>
            <ProjectsTab />
            <Heading text1="journey" text2="so far" className="mt-[60px] sm:mt-[84px]"/>
            <ExperienceTab />
            <Heading text1="Skills" text2="" className="mt-[60px] sm:mt-[84px]"/>
            <Skill />
        </>
    )
}

export default InfoCard;