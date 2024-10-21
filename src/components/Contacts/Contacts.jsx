import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook , FaInstagram  } from "react-icons/fa";

const Contacts = () => {
  const [contactInfo, setContactInfo] = useState({
    email: "kasi21.12.2000@gmail.com",
    phone: "+19 75860 12413",
  });
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Handle form submission (you can replace this with real backend integration)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!"); // For demo purposes, you can change this to integrate with an API.
    setFormData({ name: "", email: "", message: "" }); // Clear form fields after submission.
  };
  // Social links data (dynamic)
  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/kasinath2000",
    },
    {
      icon: <FaLinkedin size={24} />,
      url: "www.linkedin.com/in/kasinath-mandal-a5a6621ba",
    },
    {
      icon: <FaFacebook size={24} />,
      url: "https://www.facebook.com/kasinath.mandal.58/",
    },
    {
      icon: <FaInstagram  size={24} />,
      url: "https://www.instagram.com/kasinath_km_2000",
    },
  ];
  return (
    <section id="contacts" className="  py-12">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
        {/* Section Header */}
        <h2 className="text-3xl md:text-3xl font-bold text-center ">
          Contact Me
        </h2>
        <p className='text-center   text-gray-600 mb-5'>Get in Touch for Your Next Project!</p>
        {/* Contact Information */}
        <div className="text-center text-[#928d8d]">
          <p className="text-sm mt-1">
            <strong>Email:</strong>{""} <a href={`mailto:${contactInfo.email}`} className="text-blue-500 hover:underline">{contactInfo.email}</a>
          </p>
          <p className="text-sm mt-1">
            <strong>Phone:</strong> {""} <a href={`tel:${contactInfo.phone}`} className="text-blue-500 hover:underline">{contactInfo.phone}</a>
          </p>
        </div>


        {/* Contact Form and Social Links */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-12 space-y-8 lg:space-y-0 ">
          {/* Left: Contact Form */}
          <div className="w-full lg:w-1/2  p-6 shadow-sm rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className=''>
                {/* <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Name
                </label> */}
                <input
                  placeholder="Name.."
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-2 p-2  focus:outline-none border border-gray-100 rounded-lg"
                />
              </div>

              <div>
                {/* <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Email
                </label> */}
                <input
                  placeholder="Email.."
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-2 p-2  border border-gray-100 rounded-lg focus:outline-none"
                />
              </div>

              <div>
                {/* <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Message
                </label> */}
                <textarea
                  placeholder="Message.."
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-2 p-2 focus:outline-none  border border-gray-100 rounded-lg"
                  rows="4"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right: Social Links */}
          <div className="w-full lg:w-1/2 text-center">
            <h3 className="text-2xl font-semibold ">Connect with me</h3>
            <p className='text-center'>Let's Connect on Social Media</p>

            <div className="flex justify-center space-x-6 m-2">
              {socialLinks.map((link, index) => (
                <div
                  key={index}
                  className="text-gray-600 hover:text-gray-800 transition duration-200 cursor-pointer"
                  onClick={() => window.open(link.url, "_blank")}
                >
                  {link.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;




