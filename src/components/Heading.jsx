function Heading({ text1, text2 }) {
    return (
        <>
            <h1 className="font-lato text-[100px] font-extrabold text-[#ffffff] leading-[1] tracking-[0.20rem]">{text1}
                <br></br>
                <span className="text-[#423F3E]">{text2}</span>
            </h1>
        </>
    )
}
export default Heading;