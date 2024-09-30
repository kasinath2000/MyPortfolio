import React from 'react'

export default function ProjectDetails({ data }) {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg ">

            <img
                src={data.image}
                alt="Project Image"
                className="w-full h-64 object-cover rounded-lg"
            />


            <h1 className="text-3xl font-semibold text-gray-800 mt-6">{data.title}</h1>

            <p className="text-gray-600 mt-4">
                {data.description}
            </p>


            <div className="mt-6">
                {
                    data?.technologies.split(",")?.map((tech, idx) => {
                        return <span key={idx} className="inline-block bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-sm font-medium mr-2">
                            {tech}
                        </span>
                    })
                }
            </div>


            <div className="flex space-x-4 mt-6">
                <a
                    href={data.liveDemo}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    target="_blank"
                >Live Demo</a
                >
                <a
                    href="https://your-portfolio-deploy.com"
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                    target="_blank"
                >Close</a
                >
            </div>
        </div>
    )
}
