// import React from "react";

// function Header() {
//   return <h1>Lets Play Hide and Seek</h1>;
// }

// export default Header;


import React from 'react';

function Header(props) {
  const myStyledComponentStyles = {
    backgroundColor: '#ffcc00',
    fontFamily: 'sans-serif',
    padding: '50px',
    margin: '50px',
    marginLeft: 50,
    marginRight: 50,
    boxShadow: '5px 5px 15px',
    borderRadius: 50,
    textAlign: 'center',
    border: '1px solid cyan',
borderWidth: 2,
borderColor: 'cyan'
    
  }
  return (
    <div style={myStyledComponentStyles}>
      <h1>Hey, Let's Play Hide n' Seek</h1>
     <p>Click on the image to reveal their name.</p>
    </div>
    
  );
}

export default Header;