import React from "react";
import HomeImage from '../../assets/images/landing.png'

const About = () => {
  return (
    <section id="about" className="py-16 pt-32">


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
          <h2 className="text-3xl md:text-4xl font-bold text-start mb-8 text-white">About</h2>
          <p className="text-lg font-normal text-white"> I am a freelance [your profession] with over [X] years of experience in creating [websites, applications, etc.] for a variety of industries. My expertise includes [mention key technologies like JavaScript, React, Node.js, etc.]. I thrive on turning ideas into reality and love working with clients to bring their visions to life.</p>

        </div>



      </div>
    </section>
  );
};

export default About;
