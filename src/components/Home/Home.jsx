import React from 'react';
import HomeImage from '../../assets/images/landing.png'

const Home = () => {
  
    return (
      <>
      <section id="home" className="h-screen flex items-center md:py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-20 md:space-y-0 md:space-x-12 ">
        
        {/* Left Side - Information and Buttons */}
        <div className="flex flex-col justify-center space-y-3 w-full ">
          <h3 className="text-md font-medium ">Hi, i am</h3>
          <h1 className="text-5xl font-bold">Kasinath.</h1>
          <p className="text-md font-medium"> Hi, I'm [Your Name], a passionate freelance [Your Profession - e.g., web developer, designer, etc.]. I specialize in creating [websites, applications, designs] that help businesses grow and achieve their goals.
          </p>
          
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
          <img src={HomeImage} alt="Kasinath's Profile" />
        </div>

      </div>

      </section>

      </>
    );
  };
  
  export default Home;
  