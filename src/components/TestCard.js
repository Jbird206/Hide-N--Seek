import React from "react";

function TestCard(props) {
  return (
    <React.Fragment>
      <div className="card-wrapper" onClick={props.toggle}>
        <img src={props.imageName} alt="" className="card-image" />
      </div>
    </React.Fragment>
  );
}

export default TestCard;
