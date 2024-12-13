import './components.css';

function Navbar() {
   return (
      <div className='flex justify-center items-center'>
         <div className='mt-[24px] w-[80vw] sm:w-[20vw] h-[8vh] border-[2.5px] border-[color:#423F3E] rounded-[24px] svg-container flex justify-center items-center'>
            <a
               href='/'
               className="relative w-[12vw] sm:w-[4vw] h-[8vh] flex items-center justify-center group">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-182ee8b3-4984-4a8e-9e60-5c8c5b4cb4cf, rgb(255, 255, 255))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
               <span className="nav-text-box absolute opacity-0 translate-y-[-30px] group-hover:opacity-100 group-hover:translate-y-[0px] transition-all duration-500 bottom-[-36px] pl-[12px] pr-[12px] h-[3.5vh] text-white flex items-center justify-center rounded-[12px] border-0 bg-[#423F3E]">
                  <p className="text-[13px]">Home</p>
               </span>
            </a>
            <a href='/projects' className="relative w-[12vw] sm:w-[4vw] h-[8vh] flex items-center justify-center group">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-182ee8b3-4984-4a8e-9e60-5c8c5b4cb4cf, rgb(255, 255, 255))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
               <span className="nav-text-box absolute opacity-0 translate-y-[-30px] group-hover:opacity-100 group-hover:translate-y-[0px] transition-all duration-500 bottom-[-36px] pl-[12px] pr-[12px] h-[3.5vh] text-white flex items-center justify-center rounded-[12px] border-0 bg-[#423F3E]">
                  <p className="text-[13px]">Projects</p>
               </span>
            </a>
            <a href='/experience' className="relative w-[12vw] sm:w-[4vw] h-[8vh] flex items-center justify-center group">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-182ee8b3-4984-4a8e-9e60-5c8c5b4cb4cf, rgb(255, 255, 255))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
               <span className="nav-text-box absolute opacity-0 translate-y-[-30px] group-hover:opacity-100 group-hover:translate-y-[0px] transition-all duration-500 bottom-[-36px] pl-[12px] pr-[12px] h-[3.5vh] text-white flex items-center justify-center rounded-[12px] border-0 bg-[#423F3E]">
                  <p className="text-[13px]">Experience</p>
               </span>
            </a>
            <a href='/skills' className="relative w-[12vw] sm:w-[4vw] h-[8vh] flex items-center justify-center group">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-182ee8b3-4984-4a8e-9e60-5c8c5b4cb4cf, rgb(255, 255, 255))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
               <span className="nav-text-box absolute opacity-0 translate-y-[-30px] group-hover:opacity-100 group-hover:translate-y-[0px] transition-all duration-500 bottom-[-36px] pl-[12px] pr-[12px] h-[3.5vh] text-white flex items-center justify-center rounded-[12px] border-0 bg-[#423F3E]">
                  <p className="text-[13px]">Tools</p>
               </span>
            </a>
            <a href='/thoughts' className="relative w-[12vw] sm:w-[4vw] h-[8vh] flex items-center justify-center group">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-182ee8b3-4984-4a8e-9e60-5c8c5b4cb4cf, rgb(255, 255, 255))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
               <span className="nav-text-box absolute opacity-0 translate-y-[-30px] group-hover:opacity-100 group-hover:translate-y-[0px] transition-all duration-500 bottom-[-36px] pl-[12px] pr-[12px] h-[3.5vh] text-white flex items-center justify-center rounded-[12px] border-0 bg-[#423F3E]">
                  <p className="text-[13px]">Thoughts</p>
               </span>
            </a>

         </div>
      </div>
   )
}

export default Navbar;