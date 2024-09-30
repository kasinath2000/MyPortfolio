import React from "react";
import { Typography } from '@mui/material';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Logo from '../Logo'
const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/your-username',
    },
    {
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/your-username',
    },
    {
      icon: <FaTwitter />,
      url: 'https://twitter.com/your-username',
    },
  ];
    return (
      <footer className="bg-[#4c4b4b] text-white py-3">
        <div className="container  mx-auto px-10 py-1 flex  items-center  justify-between   space-y-6  sm:px-8 md:px-16 lg:px-20 xl:px-24 ">
        {/* Logo */}
        <Logo className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 mb-4"/>

        {/* Copyright */}
        <Typography variant="body2" className="text-center mb-2">
          © {new Date().getFullYear()} Kasinath. All rights reserved.
        </Typography>

        {/* Social Links */}
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <div
              key={index}
              className="text-black-300 hover:text-white transition duration-200 cursor-pointer"
              onClick={() => window.open(link.url, '_blank')}
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
  