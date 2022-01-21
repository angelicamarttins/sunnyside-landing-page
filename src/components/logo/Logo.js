import React from "react";

// Import styles
import './Logo.scss';

function Logo(props) {
  console.log(props.fill);
    return(
      <div>

        <img className='logo' src={props.src} />
      </div>
      
    )
};


export default Logo;