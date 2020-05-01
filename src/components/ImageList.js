import React from "react";
import FlashCard from "./Image";
import giraffe from "../assets/giraffe.jpg";
import hippo from "../assets/hippo.png";
import frog from "../assets/frog.png";
import alligator from "../assets/alligator.png";
import elephant from "../assets/elephant.png";
import hedgehog from "../assets/hedgehog.png";
import kangaroo from "../assets/kangaroo.png";
import lion from "../assets/lion.png";
import monkey from "../assets/monkey.png";
import owl from "../assets/owl.png";
import pandabear from "../assets/pandabear.png";
import parrot from "../assets/parrot.png";
import rabbit from "../assets/rabbit.png";
import snake from "../assets/snake.png";
import tiger from "../assets/tiger.png";

import { CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const masterImgList = [
  {
    id: 1,
    front: giraffe,
    back: "Giraffe",
  },
  {
    id: 2,
    front: hippo,
    back: "Hippo",
  },
  {
    id: 3,
    front: frog,
    back: "Frog",
  },
  {
    id: 4,
    front: alligator,
    back: "Alligator",
  },
  {
    id: 5,
    front: elephant,
    back: "Elephant",
  },
  {
    id: 6,
    front: hedgehog,
    back: "Hedgehog",
  },
  {
    id: 7,
    front: kangaroo,
    back: "Kangaroo",
  },
  {
    id: 8,
    front: lion,
    back: "Lion",
  },
  {
    id: 9,
    front: monkey,
    back: "Monkey",
  },
  {
    id: 10,
    front: owl,
    back: "Owl",
  },
  {
    id: 11,
    front: pandabear,
    back: "Panda Bear",
  },
  {
    id: 12,
    front: parrot,
    back: "Parrot",
  },
  {
    id: 13,
    front: rabbit,
    back: "Rabbit",
  },
  {
    id: 14,
    front: snake,
    back: "Snake",
  },
  {
    id: 15,
    front: tiger,
    back: "Tiger",
  },
];

function ImageList() {
  return (
    <React.Fragment>
      <CardDeck>
        {masterImgList.map((image, index) => (
          <FlashCard front={image.front} back={image.back} key={index} />
        ))}
      </CardDeck>
    </React.Fragment>
  );
}

export default ImageList;
