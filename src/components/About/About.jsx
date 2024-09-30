import React from "react";
import HomeImage from '../Images/Profilepic.png'

const About = () => {
    return (
      <section id="about" className="py-8  bg-[#ECECEC] ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-20">
          
        


        {/* Right Side - Image or Pictures */}
        <div className="flex items-center justify-center w-full ">
          {/* You can either add a single image or multiple images here */}
          <img src={HomeImage} alt="Kasinath's Profile" className="h-72 w-72 md:h-80 md:w-80 rounded-full shadow-lg object-cover" />
        </div>

        
        {/* Left Side - Information and Buttons */}
        <div className="flex flex-col justify-center space-y-3 w-full ">
          {/* <h3 className="text-2xl ">Hi, I'm</h3>
          <h1 className="text-5xl font-bold">Kasinath.</h1> */}
          <p className="text-sm"> I’m I am Kasinath Mandal, a web developer with skills in HTML, CSS, JavaScript, and React.js...</p>
          
        </div>
        
        

      </div>
      </section>
    );
  };
  
  export default About;
  