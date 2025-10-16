
import ProfileCard from './components/ProfileCard';
import Form from './components/Form';

function Layout({ children }) {
    return (<>
        
        <div className="flex flex-col sm:flex-row w-full mt-[72px] items-center sm:items-start justify-center gap-[72px]">
            <div className="w-[90%] sm:w-[23%] h-[90vh] sm:sticky sm:top-[48px]">
                <ProfileCard />
            </div>
            <div className="w-[90%] sm:w-[45%]">
                {children}
            </div>
        </div>
        <Form />
    </>
    );
}
export default Layout;  