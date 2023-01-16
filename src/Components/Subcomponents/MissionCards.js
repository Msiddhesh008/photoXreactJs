import React from "react";

const MissionCards = (props) => {
  return (
    <div className="col-md-4 text-center mb-4">
    <i className={ props.iconName}></i>
    <h1 className="text-light mb-3">{ props.title }</h1>
    <p className="text-secondary">{ props.para }</p>
  </div>
);
};

export default MissionCards;
