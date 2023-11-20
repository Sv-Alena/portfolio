import { Link } from "react-router-dom";
export const ShowProject = ({ showImage }) => { 


  return (
    
    <div className= "projects-box" >
      {showImage.map((card) => {
        const { title, id, photo, source} = card;
        return (
          <div  className="" key={id}>
            <img src={photo} alt="projectPhoto" className="photo-project" />
            <div className="project-conteiner_title ">
            <p className="project-title">{title}</p>
            <Link to={`${source}`}target="_blank" className="btn-show">Show</Link>
            {/* <p className="btn-show" src={source}>show</p>  */}
            </div>
          </div>
        );
      })}
    </div>
  );
};
