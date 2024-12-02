function NumberCompo({textnum, text1, text2}) {
    return(
        <div className="w-[25%] h-[100%]">
            <h2 className="font-lato text-[100px] text-[#ffffff] font-extrabold leading-[1] tracking-[0.20rem]">
                {textnum}
            </h2>
            <p className="uppercase text-[18px] font-bold text-[#6F6C6B] font-lato">{text1} <br></br><span>{text2}</span></p>

        </div>
    )
}

export default NumberCompo;