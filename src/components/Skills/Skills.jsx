import InfiniteScroll from 'react-infinite-scroll-component';

import React, { useEffect, useState, useRef } from 'react';
import { Scrolling } from './Scrolling';

const skillsList = [
  { name: 'JavaScript', logo: '/img/js.png' },
  { name: 'React', logo: '/img/reactJs.png' },
  { name: 'Node.js', logo: '/img/node.png' },
  { name: 'HTML', logo: '/img/html.png' },
  { name: 'CSS', logo: '/img/css.png' },
  { name: 'Tailwind CSS', logo: '/img/Tailwind.png' },
  { name: 'Redux', logo: '/img/redux.png' },
  { name: 'Express', logo: '/img/Express.png' },
  { name: 'MongoDB', logo: '/img/mongodb.png'},
  { name: 'TypeScript', logo: '/img/TypeScript.png' },
  { name: 'Git', logo: '/img/git.png' },
  { name: 'Firebase', logo: '/img/firebase.png' },
  { name: 'Firebase', logo: '/img/postg.png' },
];

const Skills = () => {
  
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24  ">
        <h2 className="text-3xl md:text-3xl font-bold text-center mb-8 text-white">My Skills</h2>
        <p className='text-center text-white'>Technologies and tools I use to build seamless digital experiences and deliver high-quality solutions.</p>
        
        {/* Skills Row */}
        <div >
         <Scrolling skills={skillsList} speed={10000} />
        </div>
      </div>
    </section>
  );
};

export default Skills;






  





