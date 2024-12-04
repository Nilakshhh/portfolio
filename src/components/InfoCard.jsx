import Heading from "./Heading";
import Text from "./Text";
import NumberCard from "./NumberCard"
import ProjectsTab from "./ProjectsTab";
import ExperienceTab from "./ExperienceTab";

function InfoCard() {
    var intro = "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products."
    return (
        <>
            <Heading text1="SOFTWARE" text2="ENGINEER"/>
            <Text text={intro} />
            <NumberCard />
            <Heading text1="recent" text2="projects" className="mt-[60px] sm:mt-[84px]"/>
            <ProjectsTab />
            <Heading text1="professional" text2="experience" className="mt-[60px] sm:mt-[84px]"/>
            <ExperienceTab />
        </>
    )
}

export default InfoCard;