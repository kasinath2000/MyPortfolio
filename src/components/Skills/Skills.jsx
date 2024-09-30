import InfiniteScroll from 'react-infinite-scroll-component';


// const Skills = () => {
//   const skillSet = [
//         "/img/vite.svg",
//         "/img/html.png",
//         "/img/css.png",
//         "/img/js.png",
//         "/img/react.png",
//         "/img/node.png",
//         "/img/mongodb.png",
//         "/img/mySql.png",
        
//       ]
//   const [items, setItems] = useState(skillsData.slice(0, 3)); // Load 3 initially

//   const fetchMoreData = () => {
//     setTimeout(() => {
//       setItems(items.concat(skillsData.slice(items.length, items.length + 3))); // Load 3 more items
//     }, 1000);
//   };
//     return (
//       <section id="skills" className="py-8  bg-[#ECECEC]  border">
//         <div className="container mx-auto text-center ">
//         <h2 className="text-3xl font-bold text-center mb-4 md:text-4xl">Skills</h2>
//         <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quasi.</p>
        
//         </div>
        
        

//       </section>
//     );
//   };
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
  { name: 'Express', logo: '/img/css.png' },
  { name: 'MongoDB', logo: '/img/mongodb.png'},
  { name: 'GraphQL', logo: '/img/css.png' },
  { name: 'TypeScript', logo: '/img/css.png' },
  { name: 'Git', logo: '/img/git.png' },
  { name: 'Python', logo: '/logos/python.svg' },
  { name: 'Docker', logo: '/logos/docker.svg' },
  { name: 'Firebase', logo: '/logos/firebase.svg' },
  { name: 'Sass', logo: '/logos/sass.svg' },
];

const Skills = () => {
  
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24  ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">My Skills</h2>
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






  





