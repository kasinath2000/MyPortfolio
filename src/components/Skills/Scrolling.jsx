
import React from "react";
import "./Scrolling.css";


const Scrolling = ({ skills, speed = 5000 }) => {
    return (
      <div className="inner mt-4">
         <div className="arrow-mask-left" />
         <div className="arrow-mask-right" />
        <div className="wrapper">

          <section className="section-a" style={{ "--speed": `${speed}ms` }}>
            {skills.map((skill, idx) => (
              <div className="image bg-white rounded-full shadow-lg w-16 h-16" key={idx}>
                <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain mb-4 rounded-sm" />
                <p className="text-center font-semibold text-sm text-white">{skill.name}</p>
              </div>
            ))}
          </section>
          <section className="section-a" style={{ "--speed": `${speed}ms` }}>
            {skills.map((skill, idx) => (
              <div 
              className="image bg-white rounded-full shadow-lg w-16 h-16 " 
              key={idx}>
                
                <img src={skill.logo} 
                alt={skill.name} 
                className="w-full h-full object-contain mb-4 rounded-sm" 
                />
                <p className="text-center font-semibold text-sm text-white">{skill.name}</p>
              </div>
            ))}
          </section>
          <section className="section-a" style={{ "--speed": `${speed}ms` }}>
            {skills.map((skill, idx) => (
              <div className="image w-16 h-16 bg-white rounded-full shadow-lg" key={idx}>
                <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain mb-4 shadow-xl rounded-sm" />
                <p className="text-center font-semibold text-sm text-white">{skill.name}</p>
              </div>
            ))}
          </section>
         
         
        </div>
      </div>
    );
  };
  
  export { Scrolling };
  