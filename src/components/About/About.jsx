import React from "react";
import HomeImage from '../../assets/images/aboutimg.png'

const About = () => {
  return (
    <section id="about" className="py-16 pt-32 ">


      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-5 sm:px-10 md:px-20 lg:px-32 ">

        {/* Right Side - Image or Pictures */}
        <div className="flex items-center justify-center w-full ">
          {/* You can either add a single image or multiple images here */}
          <img src={HomeImage} 
          alt="Kasinath's Profile" 
          className="  sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"
          />
        </div>


        {/* Left Side - Information  */}
        <div className="flex flex-col justify-center space-y-6 w-full ">
          
          <h2 className="text-3xl  font-bold text-start  text-white sm:text-center md:text-4xl sm:text-4xl lg:text-5xl">About</h2>
          <p className="text-lg font-normal text-white  sm:text-lg lg:text-xl"> I am a freelance web developer with over 2 years   of experience in creating websites, applications, etc. for a variety of industries. My expertise includes JavaScript, React, Node.js, etc. . I thrive on turning ideas into reality and love working with clients to bring their visions to life.</p>

        </div>



      </div>
    </section>
  );
};

export default About;
