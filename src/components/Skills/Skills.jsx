import InfiniteScroll from 'react-infinite-scroll-component';

// const skillsData = [
  
//   { name: 'HTML', image: '/path-to-html-image.jpg' },
//   { name: 'CSS', image: '/path-to-css-image.jpg' },
//   { name: 'JavaScript', image: '/path-to-js-image.jpg' },
//   { name: 'React.js', image: '/path-to-react-image.jpg' },
//   { name: 'Python', image: '/path-to-python-image.jpg' },
//   // Add more skills here
// ];
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
  const [skills, setSkills] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Load initial set of skills
    setSkills(skillsList);
  }, []);
  

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-6">My Skills</h2>
      <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          quasi.
        </p>
      <div className="relative w-full max-w-6xl p-2">
        {/* Scroll Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#8592;
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#8594;
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll space-x-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none' }} // For Firefox
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-blue-100 rounded-lg shadow-md hover:bg-blue-200 transition-all duration-300 flex flex-col items-center snap-center min-w-[160px] flex-shrink-0"
            >
              <img src={skill.logo} alt={skill.name} className="h-16 w-16 mb-2" />
              <p className="mt-2 text-center font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;






  



{/* <div className="container mx-auto text-center px-20 my-3 ">
        
          
          <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={items.length < skillsData.length}
          loader={<h4>Loading...</h4>}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((skill, index) => (
              <div key={index} className="p-4 bg-white shadow rounded text-center">
                <img src={skill.image} alt={skill.name} className="h-24 mx-auto" />
                <h3 className="mt-2 text-lg font-semibold">{skill.name}</h3>
              </div>
            ))}
          </div>
          {/* <div className=" mx-10 flex justify-center">
          {skillSet.map((skill, index) => (
             <img key={index} src={skill} alt="skill" className='w-5 h-5'/>
            ))}

          </div> */}
       //   </InfiniteScroll>
       //   </div> */}

