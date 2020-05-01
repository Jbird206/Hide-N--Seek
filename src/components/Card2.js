import React from "react";
import giraffe from "../assets/giraffe.jpg";

function Card2() {
  return (
    <React.Fragment>
      <div className="card-wrapper">
        <img src={giraffe} alt="" className="card-image" />
      </div>
    </React.Fragment>
  );
}

export default Card2;
