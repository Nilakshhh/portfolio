function Experience({ title, bp1, bp2, date }) {
    return (
        <div className="group w-[100%] border-[0] rounded-[24px] p-[18px] flex flex-col justify-between hover:bg-[#423F3E] transition-colors duration-500 ease-in-out">
            <div className="flex flex-row justify-end items-center text-[#ffffff]">
                <h1 className="capitalize text-[24px] sm:text-[30px] font-lato">{title}</h1>
                <h1>{date}</h1>
            </div>
            <div>
                <ul>
                    <li>{bp1}</li>
                    <li>{bp2}</li>
                </ul>
            </div>

        </div>
    );
}

export default Experience;