
export default function ProfileCard() {
    return (
        <div className="w-[100%] h-[100%] bg-[#ffffff] rounded-[14px] p-[12px] flex flex-col justify-evenly items-center">
            <div>
                <img
                    src="/me.jpg"
                    alt="profile-photo"
                    width={200}
                    height={250}
                    className="rounded-[14px]"
                />
                <h1 className="text-[36px] font-extrabold font-lato">NILAKSH DUREJA</h1>
            </div>
            <div>
                <p>
                    A software engineer passionate lauda lassan
                </p>
                <div className="w-[50%] h-[20%] bg-[#000000]"></div>
            </div>
        </div>
    );
}
