import React from "react";
import Card from "./Card";
import Card2 from "./Card2";
// import { CardDeck } from "react-bootstrap";
import giraffe from "../assets/giraffe.jpg";
import giraffeBack from "../assets/giraffe-back.jpg";

const masterTicketList = [
  {
    names: "Giraffe",
    front: giraffe,
    back: giraffeBack,
  },
  {
    names: "Giraffe",
    front: giraffe,
    back: giraffeBack,
  },
];

function CardList() {
  return (
    <React.Fragment>
      <div padding="10px" margin="10px">
        <hr />
        {masterTicketList.map((ticket, index) => (
          <Card
            names={ticket.names}
            front={ticket.front}
            back={ticket.back}
            key={index}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default CardList;
