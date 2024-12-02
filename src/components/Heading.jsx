function Heading({ text1, text2, className="" }) {
    return (
        <>
            <h1 className={`uppercase font-lato text-[48px] sm:text-[100px] sm:text-left text-center font-extrabold text-[#ffffff] leading-[1] tracking-[0.20rem] ${className}`}>{text1}
                <br></br>
                <span className="text-[#423F3E]">{text2}</span>
            </h1>
        </>
    )
}
export default Heading;