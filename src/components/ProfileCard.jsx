
export default function ProfileCard() {
    return (
        <div className="w-[100%] h-[100%] bg-[#ffffff] rounded-[14px] p-[12px] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-top pt-[30px] gap-[24px] h-[80%] items-center">
                <img
                    src="/me.jpg"
                    alt="profile-photo"
                    width={200}
                    height={250}
                    className="rounded-[14px]"
                />
                <h1 className="text-[36px] font-extrabold font-lato">NILAKSH DUREJA</h1>
            </div>
            <div className="h-[40%] flex flex-col justify-center items-center gap-[24px]">
                <p className="text-center text-[20px]">
                    "A software engineer who has developed countless innovative solutions"
                </p>
                <div className="flex flex-row justify-evenly items-center">
                    <a href="https://www.linkedin.com/in/nilaksh-dureja/" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px]"><i className="fa-lg fa fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/Nilakshhh" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px]"><i className="fa-lg fa fa-brands fa-github"></i></a>
                    <a href="https://www.instagram.com/nilakshhh/" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px]"><i className="fa-lg fa fa-brands fa-instagram"></i></a>
                    <a href="mailto:dnilaksh05@gmail.com" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px]"><i className="fa-lg fa fa-solid fa-envelope"></i></a>
                </div>
            </div>
        </div>
    );
}
