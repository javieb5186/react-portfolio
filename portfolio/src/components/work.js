import React from "react";

function Work() {
  return (
    <div>
      <div class='row'>
        <div class='col'>
          <p class='display-1 text-center'>My Work</p>
        </div>
      </div>
      <div class='sec row d-flex align-items-center'>
        <div class='col-sm-6'>
          <img src="/my-work.png" width="80%"></img>
        </div>
        <div class='col-sm-6'>
          <p class='display-3 text-center'>Tech Blog</p>
          <p class='display-6 text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>
      </div>
      <div class='sec row d-flex align-items-center'>
        <div class='col-sm-6'>
          <p class='display-1 text-center'>Ghost Writer</p>
          <p class='display-6 text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>
        <div class='col-sm-6'>
          <img src="/ghostwriter.png" width="80%"></img>
        </div>
      </div>
      <div class='sec row d-flex align-items-center'>
        <div class='col-sm-6'>
          <img src="/pupperpicker.png" width="80%"></img>
        </div>
        <div class='col-sm-6'>
          <p class='display-1 text-center'>Pupper Picker</p>
          <p class='display-6 text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;