import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    image:
      "https://images.unsplash.com/photo-1719937206491-ed673f64be1f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: "React, Tailwind CSS, postgresql",
    liveDemo: "https://your-portfolio.com",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information..",
    image:
      "https://images.unsplash.com/photo-1719937206491-ed673f64be1f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: "React, Tailwind CSS",
    liveDemo: "https://your-portfolio.com",
  },
 

  // Add more project data ................................
];

const Projects = ({showProjectDetails}) => {
  return (
    <section id="projects" className="py-16 pb-32">
      <div className="container mx-auto text-center mb-10">
      <h2 className="text-3xl text-center font-bold text-white">Projects</h2>
        <p className="text-center text-white">
        A showcase of my best work, featuring projects that highlight my skills and expertise in delivering results.
        </p>
      </div>
      <div className="container mx-auto text-center px-20 my-3 ">
        

        {/* Flex container for project cards */}
        <div className="flex flex-wrap justify-center gap-3  ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full md:w-[45%] lg:w-[30%] flex justify-center  "
            >
              <Card sx={{maxWidth:345 , boxShadow : 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;'}} >
                {/* Project Image */}
                <CardMedia sx={{height:140}}
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />

                {/* Project Content */}
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                  <Typography variant="body2" className="mt-2">
                    <strong>Technologies:</strong> {project.technologies}
                  </Typography>
                </CardContent>

                {/* Action Buttons */}
                <div className="p-1 flex  space-x-1 flex-col md:flex-row md:space-y-0  ">
                  {project.liveDemo && (
                    <Button className=""
                    size="small"
                      
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Button>
                  )}
                
                    <Button
                    onClick={() => showProjectDetails({
                      open : true,
                      data : project,
                      type : "project"
                    })}
                      color="primary"
                      href={project.seemore}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      see more..
                    </Button>
                 
                  
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
