import Form from "./components/Form";
import ProfileCard from "./components/ProfileCard";

function Home() {
 return (<>
    <div className="flex flex-col sm:flex-row w-full mt-[96px] items-start justify-center gap-[72px]">
      <div className="w-[23%] h-[80vh] sticky top-[48px]">
        <ProfileCard />        
      </div>
      <div className="w-[45%] bg-gray-400 h-[150vh]">

      </div>
    
    </div>
    <Form />
 </>
 )
}

export default Home;