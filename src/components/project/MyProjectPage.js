import { useState } from 'react'
import { FilterProject } from "./FilterProject";
import { ShowProject } from "./ShowProject";
import data from "../../data.js";
import "./project.css";

export const MyProjectsPage = () => {
const [projectCategory, setProjectCategory] = useState(data);

// function filterProject(category) {
//   const newProject = data.filter(element => element.category === category);
//   setProjectCategory(newProject)
// }

  return (
    <div>
      <div className="container-btn-filter">
        <FilterProject 
        data = {data}
        setProjectCategory={setProjectCategory}/>
      </div>
      <div >
        <ShowProject showImage={projectCategory}/>
        {/* {data.map((project) => (
          <ShowProject project={project} />
        ))} */}

      </div>
    </div>
  );
};
