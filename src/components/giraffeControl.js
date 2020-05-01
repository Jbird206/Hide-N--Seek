import React from "react";
import Card from "./Card";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
    this.handleClick = this.handleClick.bind(this); //new code here
  }

  handleClick() {
    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null; // new code
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <TicketList />;
      buttonText = "Return to Ticket List"; // new code
    } else {
      currentlyVisibleState = <MonthlyProduce />;
      buttonText = "Add Ticket"; // new code
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>{" "}
        {/* new code */}
      </React.Fragment>
    );
  }
}

export default TicketControl;
