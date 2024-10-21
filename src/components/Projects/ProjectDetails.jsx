import React from "react";

export default function ProjectDetails({ data, handleClose }) {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg sm:p-6 md:p-8 md:w-full">
      <img
        src={data.image}
        alt="Project Image"
        className="w-full h-48 object-cover rounded-lg sm:max-h-60 md:max-h-72 lg:max-h-80"
      />

      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mt-4 md:mt-6">
        {data.title}
      </h1>

      <p className="text-gray-600  text-sm sm:text-base md:text-lg mt-2 md:mt-4">{data.description}</p>

      <div className="flex flex-wrap mt-4 md:mt-6">
        {data?.technologies.split(",")?.map((tech, idx) => {
          return (
            <span
              key={idx}
              className="inline-block bg-blue-100 text-blue-500 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium mr-2 mb-2"
            >
              {tech}
            </span>
          );
        })}
      </div>

      <div className="flex flex-col sm:flex-row  space-x-4  space-y-2 sm:space-y-0 sm:space-x-4 mt-4 md:mt-6">
        <a
          href={data.liveDemo}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          target="_blank"
        >
          Live Demo
        </a>
        <a
          onClick={handleClose}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition cursor-pointer text-center"
        >
          Close
        </a>
      </div>
    </div>
  );
}
