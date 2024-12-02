import './components.css';

function Navbar() {
   return (
      <div className='flex justify-center items-center'>
         <div className='mt-[24px] w-[80vw] sm:w-[20vw] h-[8vh] border-[2.5px] border-[color:#423F3E] rounded-[24px] svg-container flex justify-center items-center'>
            <div className="relative w-[12vw] sm:w-[4vw] h-[8vh] flex items-center justify-center group">
               <svg
                  className="w-[12vw] sm:w-[4vw] h-[4vh] svg-container"
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M21.146,8.576l-7.55-6.135c-0.925-0.751-2.267-0.751-3.192,0c0,0,0,0,0,0L2.855,8.575C2.59,8.79,2.439,9.108,2.439,9.448  v11.543c0,0.62,0.505,1.13,1.125,1.13h5.062c0.62,0,1.125-0.51,1.125-1.13v-7.306h4.499v7.306c0,0.62,0.505,1.13,1.125,1.13h5.062  c0.62,0,1.125-0.51,1.125-1.13V9.448C21.561,9.108,21.41,8.79,21.146,8.576z M20.436,20.997h-5.062V13.68  c0-0.62-0.505-1.119-1.125-1.119H9.75c-0.62,0-1.125,0.499-1.125,1.119v7.317H3.564V9.448l7.55-6.134  c0.513-0.418,1.26-0.417,1.773,0l7.55,6.134V20.997z" />
               </svg>
               <span className="nav-text-box absolute opacity-0 translate-y-[-30px] group-hover:opacity-100 group-hover:translate-y-[0px] transition-all duration-500 bottom-[-36px] w-[16vw] sm:w-[3.5vw] h-[3.5vh] text-white flex items-center justify-center rounded-[12px] border-0 bg-[#423F3E]">
                  <p className="text-[13px]">Home</p>
               </span>
            </div>


            <svg
               className="w-[12vw] sm:w-[4vw] h-[4vh] svg-container"
               enable-background="new 0 0 50 50"
               id="Layer_1" version="1.1"
               viewBox="0 0 50 50"
               xmlns="http://www.w3.org/2000/svg">
               <rect fill="none" height="50" width="50" /><path d="M46,15v-4  c0-1.104-0.896-2-2-2c0,0-24.648,0-26,0c-1.469,0-2.484-4-4-4H3C1.896,5,1,5.896,1,7v4v29v4c0,1.104,0.896,2,2,2h39  c1.104,0,2-0.896,2-2" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" /><path d="M1,44l5-27  c0-1.104,0.896-2,2-2h39c1.104,0,2,0.896,2,2l-5,27" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" /></svg>
            <svg
               className="w-[12vw] sm:w-[4vw] h-[4vh] svg-container"
               enable-background="new 0 0 50 50"
               id="Layer_1" version="1.1"
               viewBox="0 0 50 50"
               xmlns="http://www.w3.org/2000/svg">
               <rect fill="none" height="50" width="50" /><path d="M46,15v-4  c0-1.104-0.896-2-2-2c0,0-24.648,0-26,0c-1.469,0-2.484-4-4-4H3C1.896,5,1,5.896,1,7v4v29v4c0,1.104,0.896,2,2,2h39  c1.104,0,2-0.896,2-2" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" /><path d="M1,44l5-27  c0-1.104,0.896-2,2-2h39c1.104,0,2,0.896,2,2l-5,27" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" /></svg>
            <svg
               className="w-[12vw] sm:w-[4vw] h-[4vh] svg-container"
               enable-background="new 0 0 50 50"
               id="Layer_1" version="1.1"
               viewBox="0 0 50 50"
               xmlns="http://www.w3.org/2000/svg">
               <rect fill="none" height="50" width="50" /><path d="M46,15v-4  c0-1.104-0.896-2-2-2c0,0-24.648,0-26,0c-1.469,0-2.484-4-4-4H3C1.896,5,1,5.896,1,7v4v29v4c0,1.104,0.896,2,2,2h39  c1.104,0,2-0.896,2-2" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" /><path d="M1,44l5-27  c0-1.104,0.896-2,2-2h39c1.104,0,2,0.896,2,2l-5,27" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" /></svg>
            <svg
               className="w-[12vw] sm:w-[4vw] h-[4vh] svg-container"
               enable-background="new 0 0 50 50"
               id="Layer_1" version="1.1"
               viewBox="0 0 50 50"
               xmlns="http://www.w3.org/2000/svg">
               <rect fill="none" height="50" width="50" /><path d="M46,15v-4  c0-1.104-0.896-2-2-2c0,0-24.648,0-26,0c-1.469,0-2.484-4-4-4H3C1.896,5,1,5.896,1,7v4v29v4c0,1.104,0.896,2,2,2h39  c1.104,0,2-0.896,2-2" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" /><path d="M1,44l5-27  c0-1.104,0.896-2,2-2h39c1.104,0,2,0.896,2,2l-5,27" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" /></svg>


         </div>
      </div>
   )
}

export default Navbar;