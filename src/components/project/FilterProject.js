export const FilterProject = ({ data, setProjectCategory }) => {

  function filterProjectCategory(category) {
    const newProjectFiltered = [];
    data.forEach((item) => {
      item.category.forEach((world) => {
        if (world === category) {
          newProjectFiltered.push(item);
          setProjectCategory(newProjectFiltered);
        }
      });
    });
  }
  return (
    <div className="container-btn-filter">
      <button  className="btn-show" onClick={() => filterProjectCategory("react")}>REACT</button>
      <button className="btn-show" onClick={() => filterProjectCategory("js")}>JAVA SCRIPT</button>
      <button className="btn-show" onClick={() => filterProjectCategory("all")}>ВСЕ</button>
    </div>
  );
};
