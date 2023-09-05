import React from "react";
import Contact from "./contact";

function Footer() {
  return (
    <div className='sec row d-flex align-items-around'>
      <p className='display-3 text-center'>Contact</p>
      <div className='row'>
        <div className='col'>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Footer;