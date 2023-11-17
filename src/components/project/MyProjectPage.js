import { useState } from "react";
import { FilterProject } from "./FilterProject";
import { ShowProject } from "./ShowProject";
import data from "../../data.js";
import "./project.css";

export const MyProjectsPage = () => {
  const [projectCategory, setProjectCategory] = useState(data);

  return (
    <div className="container-myProjectPage">
      <div className="container-btn-filter">
        <FilterProject data={data} setProjectCategory={setProjectCategory} />
      </div>
      <div>
        <ShowProject showImage={projectCategory}/>
      </div>
    </div>
  );
};
