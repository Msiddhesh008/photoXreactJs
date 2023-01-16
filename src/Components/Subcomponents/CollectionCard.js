import React from "react";

const CollectionCard = (props) => {
  return (
    <div className="col-lg-4 col-sm-6 my-3">
      <div className="card border-0 card-shadow">
        <img src={props.imgLink} className="card-img" alt="img" />
        <div className="card-img-overlay">
          <h5 className="text-white text-uppercase fw-bold p-2 heading">
            {props.collectionCardTitle}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
