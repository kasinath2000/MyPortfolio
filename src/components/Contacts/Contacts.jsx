import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contacts = () => {
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
      url: "https://github.com/your-username",
    },
    {
      icon: <FaLinkedin size={24} />,
      url: "https://linkedin.com/in/your-username",
    },
    {
      icon: <FaTwitter size={24} />,
      url: "https://twitter.com/your-username",
    },
  ];
  return (
    <section id="contacts" className="bg-[#ECECEC]  py-12">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Contact Me
        </h2>
        <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, delectus.</p>


        {/* Contact Form and Social Links */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-12 space-y-8 lg:space-y-0">
          {/* Left: Contact Form */}
          <div className="w-full lg:w-1/2 bg-[#ECECEC]  p-6 shadow-sm rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div> */}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <h3 className="text-2xl font-semibold mb-4">Connect with me</h3>
            <div className="flex justify-center space-x-6">
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
