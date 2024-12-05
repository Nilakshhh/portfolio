function SkillCompo({img, text}) {
    return(
        <div className="w-[50%] h-[100%] flex flex-row gap-[20px] items-center justify-start pl-[24px] hover:bg-[#423F3E] transition-colors duration-500 ease-in-out rounded-[24px]">
            <img src={img} alt="logo" className="sm:w-[72px] w-[60px]"></img>
            <p className="text-[#ffffff] text-[24px] sm:text-[30px] font-lato">{text}</p>
        </div>
    )
}

export default SkillCompo;