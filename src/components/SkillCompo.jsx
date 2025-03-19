function SkillCompo({img, text}) {
    return(
        <div className="w-[30%] h-[100%] flex flex-col sm:flex-row gap-[20px] items-center justify-center sm:justify-start sm:pl-[24px]">
            <img src={img} alt="logo" className="sm:w-[60px] w-[60px]"></img>
            <p className="text-[#ffffff] text-[24px] sm:text-[18px] font-lato">{text}</p>
        </div>
    )
}

export default SkillCompo;
