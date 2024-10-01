import React from 'react';
import HomeImage from '../../assets/images/landing.png'

const Home = () => {
  
    return (
      <>
      <section id="home" className="h-screen pt-16 flex items-center py-10 md:py-20 ">

        
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-5 space-y-8 md:px-20 md:space-y-0   ">
        
        {/* Left Side - Information and Buttons */}
        <div className="flex flex-col justify-center space-y-3 w-full border ">
          <h3 className="text-sm font-medium sm:text-sm ">Hi, i am</h3>
          <h1 className="text-4xl sm:text-5xl font-bold">Kasinath.</h1>
          <p className="text-sm font-medium sm:text-md"> Hi, I'm Kasinath Mandal, a passionate freelance web developer. I specialize in creating web sites that help businesses grow and achieve their goals.
          </p>
          
          {/* Buttons */}
          <div className="space-x-4 ">
            <button className="bg-[#5463FF] hover:bg-blue-700 text-white px-5 py-2 shadow-sm rounded-lg"
             onClick={() => window.open('https://github.com/kasinath2000', '_blank')}
            >
            Github
            </button>
            <button className="bg-[#B1B1B1] text-white px-5 py-2 shadow-sm rounded-lg"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/path/to/your/resume.pdf'; // Update this path with your resume file location
              link.download = 'Kasinath_Resume.pdf'; // Specify the downloaded file name
              link.click();
            }}
            >
            Resume
            </button>
          </div>


        </div>
        
        {/* Right Side - Image or Pictures */}
        <div className="flex items-center justify-center w-full">
          {/* You can either add a single image or multiple images here */}
          <img src={HomeImage} 
          alt="Kasinath's Profile" 
          className="  " // Adjust image size based on screen size
          />
        </div>

      </div>




      </section>

      </>
    );
  };
  
  export default Home;
  