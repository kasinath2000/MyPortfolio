import React from "react";
import { Typography } from '@mui/material';
import { FaGithub, FaLinkedin, FaFacebook,FaInstagram } from 'react-icons/fa';
import Logo from '../Logo'
const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      url: 'https://github.com/kasinath2000',
    },
    {
      icon: <FaLinkedin size={20}/>,
      url: 'www.linkedin.com/in/kasinath-mandal-a5a6621ba',
    },
    {
      icon: <FaFacebook size={20} />,
      url: "https://www.facebook.com/kasinath.mandal.58/",
    },
    {
      icon: <FaInstagram  size={20} />,
      url: "https://www.instagram.com/kasinath_km_2000",
    },
  ];
    return (
      <footer className="bg-[#b7b7b7] text-white py-3">
        <div className="container  mx-auto px-10 py-1 flex flex-col items-center  justify-between sm:flex-row  space-y-4  sm:px-8 md:px-16 lg:px-20 xl:px-24  sm:space-y-0">
          {/* Logo */}
          <Logo className="sm:w-10 md:w-10 lg:w-28 "  />

          {/* Copyright */}
          <Typography variant="body2" className="text-center mb-2 text-[#424040]">
            © {new Date().getFullYear()} Kasinath | All rights reserved.
          </Typography>

          {/* Social Links */}
          <div className="flex space-x-4 sm:justify-end ">
            {socialLinks.map((link, index) => (
              <div
                key={index}
                className="text-black-300 hover:text-orange-700 transition duration-200 cursor-pointer text-[#424040]"
                onClick={() => window.open(link.url, "_blank")}
              >
                {link.icon}
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  