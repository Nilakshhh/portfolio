import React, { useState } from 'react';
import Heading from './Heading';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:dnilaksh05@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <Heading text1="Let's connect" className="mt-[60px] sm:mt-[120px] !text-center" />
      <div className="w-[100%] p-[24px]">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-[5%]">
            <div className="flex flex-col w-[100%] sm:w-[45%]">
              <p className="text-[#ffffff] font-lato text-[18px]">Name:</p>
              <input
                className="bg-[#423F3E] pl-[12px] h-[5vh] text-[16px] mb-[12px] rounded-lg mt-[12px]"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col w-[100%] sm:w-[45%]">
              <p className="text-[#ffffff] font-lato text-[18px]">Email:</p>
              <input
                className="bg-[#423F3E] pl-[12px] h-[5vh] text-[16px] mb-[12px] mt-[12px] rounded-lg"
                type="email"
                name="email"
                placeholder="johndoe@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-[100%] sm:w-[95%]">
            <p className="text-[#ffffff] font-lato text-[18px]">Subject:</p>
            <input
              className="bg-[#423F3E] pl-[12px] h-[5vh] text-[16px] mb-[12px] mt-[12px] rounded-lg"
              type="text"
              name="subject"
              placeholder="Subject of your email"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col w-[100%] sm:w-[95%]">
            <p className="text-[#ffffff] font-lato text-[18px]">Message:</p>
            <textarea
              className="bg-[#423F3E] pl-[12px] pt-[12px] h-[20vh] text-[16px] mb-[12px] mt-[12px] rounded-lg"
              name="message"
              placeholder="What would you like to talk about?"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-[100%] flex justify-center items-center">
            <button
              className="text-center w-[45%] sm:w-[15%] mt-[12px] h-[5vh] text-[18px] bg-[#E85C0D] rounded-lg text-[#ffffff]"
              type="submit"
            >
              Send Email
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
