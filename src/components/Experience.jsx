function Experience({ title, desc, position, date }) {
    return (
        <div className="group w-[100%] border-[0] rounded-[24px] p-[18px] flex flex-col gap-[24px] justify-between hover:bg-[#423F3E] transition-colors duration-500 ease-in-out">
            <div className="flex flex-row justify-between text-[#ffffff]">
                <div className="flex flex-col ">
                    <h1 className="capitalize text-[24px] sm:text-[30px] font-lato">{title}</h1>
                    <h3>{position}</h3>
                </div>
                <h1 className="capitalize text-[18px] sm:text-[24px] font-lato">{date}</h1>
            </div>
            <div className="text-[#ffffff]">
                <p className="w-[100%] sm:w-[85%]">{desc}</p>
            </div>

        </div>
    );
}

export default Experience;