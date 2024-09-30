import React from 'react';

import HomeImage from '../Images/Profilepic.png'

const Home = () => {
  
    return (
      <>
      <section id="home" className="h-screen flex items-center  bg-[#ECECEC] md:py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-20 md:space-y-0 md:space-x-12 ">
        
        {/* Left Side - Information and Buttons */}
        <div className="flex flex-col justify-center space-y-3 w-full ">
          <h3 className="text-2xl ">Hi, I'm</h3>
          <h1 className="text-5xl font-bold">Kasinath.</h1>
          <p className="text-sm"> I’m currently focused on expanding my experience designing and developing high performing websites.</p>
          
          {/* Buttons */}
          <div className="space-x-4">
            <button className="bg-[#5463FF] hover:bg-blue-700 text-white px-5 py-2 shadow-sm rounded-lg">
            Projects
            </button>
            <button className="bg-[#B1B1B1] text-white px-5 py-2 shadow-sm rounded-lg">
            Resume
            </button>
          </div>
        </div>
        
        {/* Right Side - Image or Pictures */}
        <div className="flex items-center justify-center w-full ">
          {/* You can either add a single image or multiple images here */}
          <img src={HomeImage} alt="Kasinath's Profile" className="h-72 w-72 md:h-80 md:w-80 rounded-full shadow-lg object-cover" />
        </div>

      </div>

      </section>

      </>
    );
  };
  
  export default Home;
  