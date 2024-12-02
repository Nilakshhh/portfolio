import Form from "./components/Form";
import ProfileCard from "./components/ProfileCard";
import InfoCard from "./components/InfoCard";

function Home() {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full mt-[96px] items-center sm:items-start justify-center gap-[72px]">
        <div className="w-[90%] sm:w-[23%] h-[90vh] sm:sticky sm:top-[48px]">
          <ProfileCard />
        </div>
        <div className="w-[90%] sm:w-[45%]">
          <InfoCard />
        </div>

      </div>
      <Form />
    </>
  )
}

export default Home;