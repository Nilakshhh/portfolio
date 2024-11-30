import Form from "./components/Form";

function Home() {
 return (<>
    <div className="flex flex-col sm:flex-row w-full mt-[48px] items-start justify-center gap-[72px]">
      <div className="w-[25%] bg-[#9B3922] h-[80vh] sticky top-[48px]">

      </div>
      <div className="w-[50%] bg-gray-400 h-[150vh]">

      </div>
    
    </div>
    <Form />
 </>
 )
}

export default Home;