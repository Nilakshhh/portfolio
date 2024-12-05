import SkillCompo from "./SkillCompo";

function Skill() {
    return(
    <div className="flex flex-col gap-[12px]">
        <div className="flex flex-row items-center justify-between w-[100%] h-[12vh] mt-[60px]">
            <SkillCompo img="/f.png" text="React.JS" />        
            <SkillCompo img="/react.svg" text="React.JS" /> 
       </div>        
        <div className="flex flex-row items-center justify-between w-[100%] h-[12vh] mt-[60px]">
            <SkillCompo img="/react.svg" text="React.JS" />
            <SkillCompo img="/react.svg" text="React.JS" />        
       </div>        
    </div>
    )

}

export default Skill;