import data from "../../data.js";
import Projects from "./Projects.js";

export const PhotosProjectsPage = () => {
  return (
    <div>
      
      {data.map(project => <Projects project={project}/>)}
      
    </div>
  );
};
