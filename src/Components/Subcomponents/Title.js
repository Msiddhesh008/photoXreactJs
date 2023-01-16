import React from "react";

const Title = (props) => {
  return (
      <div className="col m-4 ">
        <h1 className={ "display-4 mb-4 "+props.TitleColor }>{props.title}</h1>
        <div className={"underline mb-4 "+props.underlineColor}></div>
        <p className={props.text}>{props.para}</p>
      </div>
  );
};
export default Title;
