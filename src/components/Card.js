import React from "react";
import giraffe from "../assets/giraffe.jpg";

function Card() {
  return (
    <React.Fragment>
      <div className="card-wrapper">
        <img src={giraffe} alt="" className="card-image" />
      </div>
    </React.Fragment>
  );
}

export default Card;

// export default Card;

// import React from "react";
// import PropTypes from "prop-types";

// import React from "react";
// import PropTypes from "prop-types";
// // import Image1 from '../assets/1.jpg';
// import { Card, Button } from "react-bootstrap";

// function Item(props) {
//   return (
//     <Card
//       style={{
//         width: "18rem",
//         overflow: "hidden",
//         borderRadius: "15px",
//         marginTop: "15px",
//         marginBottom: "15px",
//       }}
//     >
//       <Card.Img variant="top" src={props.location} />
//       <Card.Body>
//         <Card.Title>{props.names}</Card.Title>
//         <Card.Text>{props.issue}</Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// Item.propTypes = {
//   names: PropTypes.string,
//   location: PropTypes.string,
//   issue: PropTypes.string,
// };

// export default Item;
