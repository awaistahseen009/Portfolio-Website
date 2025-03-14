import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorksItem from "./WorksItem";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProject = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProject);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((navItem, index) => (
          <span
            onClick={(e) => handleClick(e, index)}
            className={`work__item ${active === index ? "active-work" : ""}`}
            key={index}
          >
            {navItem.name}
          </span>
        ))}
      </div>
      <div className="work__container container grid">
        {projects.map((project) => (
          <WorksItem item={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Works;
