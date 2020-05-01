import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";


class FlashCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
    };
  }
  render() {
    const handleClick = () => this.flip();
    return (
      <div onClick={handleClick}>
        <Card
          style={{
            width: "18rem",
            overflow: "hidden",
            borderRadius: "15px",
            marginTop: "15px",
            boxShadow: "5px 5px 20px",
            backgroundColor: "rgb(228, 227, 181)",
            border: "2px solid cyan",
            borderWidth: "2px",
            marginBottom: "15px",
            height: "28rem",
            textAlign: "center",
            justifyContent: "center",
            transform: "perspective(1000px) rotateY(var(--rotate-y, 0)) translateY(var(--translate-y, 0))",
          }}
        >
          {!this.state.flipped && (
            <Card.Img
              variant="top"
              // style={{
              //   height: "28rem",
              // }}
              src={this.props.front}
            />
          )}
          {this.state.flipped && (
            <h2>
              <em>{this.props.back}</em>
            </h2>
          )}
        </Card>
      </div>
    );
  }

  flip() {
    this.setState({
      flipped: !this.state.flipped,
    });
  }
}

FlashCard.propTypes = {
  front: PropTypes.string,
  back: PropTypes.string,
};

export default FlashCard;
