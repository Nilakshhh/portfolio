function Project({ image, title, link, description }) {
    return (
        <div className="group w-[100%] border-[0] rounded-[24px] p-[18px] flex flex-row justify-between hover:bg-[#423F3E] transition-colors duration-500 ease-in-out">

            <div className="flex flex-row">
                <img src={image} alt={title} className="sm:w-[132px] sm:h-[144px] w-[108px] h-[120px] rounded-[24px]" />
                <div className="text-[#ffffff] flex flex-col items-start pl-[12px] gap-[4px] sm:gap-[12px] justify-center">
                    <h3 className="capitalize text-[24px] sm:text-[30px] font-lato">{title}</h3>
                    <p className="text-[14px] sm:text-[14px] capitalize font-mont">{description}</p>
                </div>
            </div>

            <div className="text-[#ffffff] flex flex-col items-start justify-start">
                <a href={link} target="_blank" rel="noopener noreferrer"><i className="fa fa-lg group-hover:scale-125 transition-transform duration-500 fa-solid fa-arrow-right rotate-[315deg]"></i></a>
            </div>

        </div>
    );
}

export default Project;