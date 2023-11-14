export const ShowProject = ({ showImage }) => {
  return (
    <div className= "projects-box" >
      {showImage.map((card) => {
        const { title, id, photo } = card;
        return (
          <div  className="" key={id}>
            <img src={photo} alt="projectPhoto" className="photo-project" />
            <div className="project-conteiner_title ">
            <p className="project-conteiner_title">{title}</p>
            <p className=" ">show</p> 
            </div>
          </div>
        );
      })}
    </div>
  );
};
