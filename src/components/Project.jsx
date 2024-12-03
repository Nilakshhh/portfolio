function Project({ image, title, link, description }) {
    return (
        <div className="big w-[100%] border-[0] rounded-[24px] p-[18px] flex flex-row justify-between hover:bg-[#423F3E] transition-colors duration-700 ease-in-out">
            
            <div className="flex flex-row">
                <img src={image} alt={title} className="w-[132px] h-[144px] rounded-[24px]" />
                <div className="text-[#ffffff] flex flex-col items-start pl-[12px] gap-[12px] justify-center">
                    <h3 className="capitalize text-[30px] font-lato leading-[0.75]">{title}</h3>
                    <p className="text-[14px] capitalize font-mont">{description}</p>
                </div>
            </div>

            <div className="text-[#ffffff] flex flex-col items-start justify-start">
                <a href={link}><i className="fa fa-lg big-hover:fa-2x fa-solid fa-arrow-right rotate-[315deg]"></i></a>
            </div>

        </div>
    );
}

export default Project;