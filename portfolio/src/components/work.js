import React from "react";

function Work() {
  return (
    <div>
      <div className='row below-header'>
        <div className='col'>
          <p className='display-1 text-center'>My Work</p>
        </div>
      </div>
      <div className='sec row d-flex align-items-center'>
        <div className='col-sm-6'>
          <img src="/my-work.png" width="80%"></img>
        </div>
        <div className='col-sm-6'>
          <p className='display-3 text-center'>Tech Blog</p>
          <p className='display-6 text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>
      </div>
      <div className='sec row d-flex align-items-center'>
        <div className='col-sm-6'>
          <p className='display-1 text-center'>Ghost Writer</p>
          <p className='display-6 text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>
        <div className='col-sm-6'>
          <img src="/ghostwriter.png" width="80%"></img>
        </div>
      </div>
      <div className='sec row d-flex align-items-center'>
        <div className='col-sm-6'>
          <img src="/pupperpicker.png" width="80%"></img>
        </div>
        <div className='col-sm-6'>
          <p className='display-1 text-center'>Pupper Picker</p>
          <p className='display-6 text-center'>
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