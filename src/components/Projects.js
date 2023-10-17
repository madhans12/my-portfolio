import React from "react";
import ProjectComp from "./ProjectData";
import { Project } from "./ProjectData";

const Projects = () => {
  const Projects = Project.projects;
  return (
    <div className="project-container">
      {Projects.map((proj) => (
        <div key={proj.id}>
          <ProjectComp project={proj} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
