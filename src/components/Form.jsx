export default function Form() {
    return (
      <div className="form_bg flex flex-col py-[80px] gap-[40px] px-[144px]">
        <div className="flex flex-col items-start justify-start gap-[10px]">
          <h1 className="font-geist text-[64px] font-extrabold leading-[76.8px] tracking-[-1.2px] text-left text-[#020611] w-[85%]">
            <span className="text-[#c6c6c6]">Say Hi!</span>{" "}And Tell Us About
            Your IDEA.
          </h1>
          <p className="font-geist text-[#525252] text-[24px] font-normal leading-[36px] text-left capitalize w-[86%]">
            Get in touch to discuss your project or service expectations. Simply
            fill in the form below or send us an e-mail
            to info@Dashmicrosystem.com
          </p>
        </div>
        <form className="flex flex-col py-[50px] gap-[100px]">
          <div className="flex justify-start items-center gap-[10%]">
            <div className="flex flex-col w-[45%]">
              <label htmlFor="fullname" className="font-geist text-[#525252] uppercase text-[18px] font-medium leading-[28px] text-left">Full Name*</label>
              <input
                className="border-b-2 outline-none w-[400px] py-[10px] font-geist text-[18px] font-normal leading-[28px] text-left text-[#ABABAB]"
                id="firstname"
                placeholder="So we know how to address you
  "
                type="text"
              />
            </div>
            <div className="flex flex-col w-[45%]">
              <label htmlFor="CompanyName" className="font-geist text-[#525252] uppercase text-[18px] font-medium leading-[28px] text-left">Company Name</label>
              <input
                className="border-b-2 outline-none w-[400px] py-[10px] font-geist text-[18px] font-normal leading-[28px] text-left text-[#ABABAB]"
                id="CompanyName"
                placeholder="So we can tailor services to your business needs"
                type="text"
              />
            </div>
          </div>
          <div div className="flex justify-start items-start gap-[40px]">
            <div className="flex flex-col w-[100%]">
              <label htmlFor="MESSAGE" className="font-geist text-[#525252] uppercase text-[18px] font-medium leading-[28px] text-left">MESSAGE</label>
              <input
                className="border-b-2 outline-none lg:w-[900px] xl:w-[900px] py-[10px] font-geist text-[18px] font-normal leading-[28px] text-left text-[#ABABAB]"
                id="MESSAGE"
                placeholder="Give us more details about your request so the colleagues with relevant experience can focus on your needs"
                type="text"
              />
            </div>
          </div>
          <div div className="flex justify-between items-center ">  
            <button className="uppercase bg-black text-white px-[12px] py-0 text-[14px] hover:scale-[1.1]">
              <span>
                <svg width="368" height="72" viewBox="0 0 368 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="368" height="72" fill="#020611" />
                  <path d="M119.464 42H118.456L118.328 40.144C117.848 41.392 116.44 42.256 114.92 42.256C111.656 42.256 109.784 39.632 109.784 36.336C109.784 33.024 111.64 30.384 114.92 30.384C117.336 30.384 118.92 31.888 119.416 34.128L117.976 34.224C117.592 32.688 116.568 31.728 114.92 31.728C112.328 31.728 111.224 33.872 111.224 36.336C111.224 38.784 112.344 40.912 114.92 40.912C116.904 40.912 118.008 39.472 118.136 37.6H114.92V36.256H119.464V42ZM121.8 30.64H128.936V31.984H123.176V35.648H128.744V36.96H123.176V40.656H129.064V42H121.8V30.64ZM138.817 30.64V31.984H135.281V42H133.905V31.984H130.369V30.64H138.817ZM144.691 30.64H146.067V42H144.691V30.64ZM149.003 30.64H150.923L156.491 40.368V30.64H157.867V42H155.867L150.379 32.432V42H149.003V30.64ZM172.192 30.64V31.984H168.656V42H167.28V31.984H163.744V30.64H172.192ZM178.249 42.256C175.017 42.256 173.065 40 173.065 36.336C173.065 32.64 175.017 30.384 178.249 30.384C181.497 30.384 183.449 32.64 183.449 36.336C183.449 40 181.497 42.256 178.249 42.256ZM174.505 36.336C174.505 39.168 175.913 40.912 178.249 40.912C180.601 40.912 182.009 39.168 182.009 36.336C182.009 33.472 180.601 31.728 178.249 31.728C175.913 31.728 174.505 33.472 174.505 36.336ZM194.026 38.032C194.026 40.624 192.378 42.256 189.754 42.256C187.114 42.256 185.466 40.624 185.466 38.032V30.624H186.842V38.032C186.842 39.872 187.898 40.912 189.754 40.912C191.594 40.912 192.65 39.872 192.65 38.032V30.624H194.026V38.032ZM205.778 38.256C205.362 40.64 203.81 42.256 201.186 42.256C197.922 42.256 196.05 39.632 196.05 36.336C196.05 33.024 197.906 30.384 201.186 30.384C203.602 30.384 205.186 31.888 205.682 34.128L204.226 34.224C203.858 32.624 202.754 31.728 201.186 31.728C198.594 31.728 197.49 33.872 197.49 36.336C197.49 38.784 198.61 40.912 201.186 40.912C202.85 40.912 203.97 39.92 204.306 38.16L205.778 38.256ZM207.956 42V30.64H209.332V35.616H214.884V30.64H216.26V42H214.884V36.96H209.332V42H207.956Z" fill="white" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M247.729 43.5399C247.431 43.2524 247.423 42.7776 247.71 42.4794L253.235 36.75H237C236.586 36.75 236.25 36.4142 236.25 36C236.25 35.5858 236.586 35.25 237 35.25H253.235L247.71 29.5206C247.423 29.2224 247.431 28.7476 247.729 28.4601C248.028 28.1726 248.502 28.1812 248.79 28.4794L255.54 35.4794C255.82 35.7699 255.82 36.2301 255.54 36.5206L248.79 43.5206C248.502 43.8188 248.028 43.8274 247.729 43.5399Z" fill="white" />
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    );
  }