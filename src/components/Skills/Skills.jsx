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
        <p className='text-center text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, delectus.</p>
        
        {/* Skills Row */}
        <div className="flex mt-5 overflow-x-auto space-x-8 justify-start items-center scrollbar-hide">
          {skillsList.map((skill, index) => (
            <div key={index} className="flex flex-col items-center min-w-[100px] animate-marquee-infinite  ">
              <img src={skill.logo} alt={skill.name} className="w-16 h-16 md:w-8 md:h-8 object-contain mb-4 shadow-xl rounded-sm" />
              <p className="text-center font-semibold text-sm text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;






  





