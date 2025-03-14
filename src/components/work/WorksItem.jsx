import React from "react";

const WorksItem = ({ item }) => {
  const splitTitle = (title) => {
    if (title.length > 20 && title.indexOf(" ", 20) !== -1) {
      const index = title.lastIndexOf(" ", 20);
      return [title.slice(0, index), title.slice(index + 1)];
    } else return [title];
  };

  const [line1, line2] = splitTitle(item.title);

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="image-here" className="work__image" />
      <h3 className="item__title">
        {line1}
        {line2 && <br />}
        {line2}
      </h3>
      <a href="#" className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorksItem;
