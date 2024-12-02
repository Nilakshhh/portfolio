import NumberCompo from "./NumberCompo";

function NumberCard() {
    return(
        <div className="flex flex-row items-center justify-between w-[100%] h-[20vh] mt-[60px]">
            <NumberCompo textnum="+2" text1="Years of" text2="experience" />        
            <NumberCompo textnum="+8" text1="Projects" text2="Completed" />        
            <NumberCompo textnum="+2" text1="Years of" text2="experience" />
        </div>
    )

}

export default NumberCard;