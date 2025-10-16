import SkillCompo from "./SkillCompo";

function Skill() {
    return(
    <div className="flex flex-col gap-[12px]">
        <div className="flex flex-row items-center gap-[12px] sm:gap-[0] justify-between w-[100%] mt-[60px]">
            <SkillCompo img="/react.png" text="ReactJS" />        
            <SkillCompo img="/tailwind.png" text="Tailwind CSS" /> 
            <SkillCompo img="/next.png" text="NextJS" /> 
        </div>        
        <div className="flex flex-row items-center gap-[12px] sm:gap-[0] justify-between w-[100%] mt-[60px]">
            <SkillCompo img="/f.png" text="Node JS" />        
            <SkillCompo img="/flask.png" text="Flask" /> 
            <SkillCompo img="/go_gin_gonic.png" text="Go Gin Gonic" /> 
        </div>        
        <div className="flex flex-row items-center gap-[12px] sm:gap-[0] justify-between w-[100%] mt-[60px]">
            <SkillCompo img="/postgre.png" text="PostgreSQL" />        
            <SkillCompo img="/mongodb.png" text="Mongo DB" /> 
            <SkillCompo img="/redis.png" text="Redis" /> 
        </div>  
        <div className="flex flex-row items-center gap-[12px] sm:gap-[0] justify-between w-[100%] mt-[60px]">
            <SkillCompo img="/aws.png" text="AWS S3, EC2, Lambda" />        
            <SkillCompo img="/docker.png" text="Docker" /> 
            <SkillCompo img="/linux.png" text="Linux" /> 
        </div>        
             
    </div>
    )

}

export default Skill;