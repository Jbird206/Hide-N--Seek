import React from "react";
import Header from "./components/header";
//import Market from "./components/MarketControl";
// import CardList from "./components/CardList";
// import './index.css';
import "./App.css";



import ImageList from "./components/ImageList";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />

        <ImageList />
      </div>
    </React.Fragment>
  );
}

export default App;
