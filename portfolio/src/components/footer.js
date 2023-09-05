import React from "react";
import Contact from "./contact";

function Footer() {
  return (
    <div class='sec row d-flex align-items-around'>
      <p class='display-3 text-center'>Contact</p>
      <div class='row'>
        <div class='col'>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Footer;