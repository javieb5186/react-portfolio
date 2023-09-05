import React from "react";
import Navigation from "./navigation";

function Header() {
  return (
    <div class='header container-fluid'>
      <header class='row'>
        <div class='row'>
          <div class='col-sm-4'>
            <h1>
              Javier B
            </h1>
          </div>
          <div class='col-sm-4 my-auto d-flex justify-content-center'>
            <Navigation />
          </div>
          <div class='col-sm-4'></div>
        </div>
      </header>
    </div>
  )
}

export default Header;