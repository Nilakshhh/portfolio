import React, { useState } from 'react';
import Heading from './Heading';

const Form = () => {
  const [formData, setFormData] = useState({
    subject: '',
    body: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:dnilaksh05@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(formData.body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <Heading text1="LEt's connect" className="mt-[60px] sm:mt-[120px] !text-center" />
      <div className='w-[100%] p-[24px]'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col sm:flex-row gap-[5%]'>
            <div className='flex flex-col w-[100%] sm:w-[45%]'>
              <p className='text-[#ffffff] font-lato text-[18px]'>Name:</p>
              <input
                className='bg-[#423F3E] pl-[12px] h-[5vh] text-[16px] mb-[12px] rounded-lg mt-[12px]'
                type="text"
                name="subject"
                placeholder='John Doe'
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className='flex flex-col w-[100%] sm:w-[45%]'>
              <p className='text-[#ffffff] font-lato text-[18px]'>Email:</p>
              <input
                className='bg-[#423F3E] pl-[12px] h-[5vh] text-[16px] mb-[12px] mt-[12px] rounded-lg'
                type="text"
                name="subject"
                placeholder='johndoe@gmail.com'
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>
            <div className='flex flex-col w-[100%] sm:w-[95%]'>
              <p className='text-[#ffffff] font-lato text-[18px]'>Message:</p>
              <input
                className='bg-[#423F3E] pl-[12px] h-[10vh] text-[16px] mb-[12px] mt-[12px] rounded-lg'
                type="text"
                name="subject"
                placeholder='What would you like to talk about?'
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
          <button className="text-center w-[100%] text-[#ffffff]" type="submit">Send Email</button>
        </form>
      </div>
    </>
  );
};

export default Form;
