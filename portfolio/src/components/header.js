import React from "react";
import Navigation from "./navigation";

function Header({page, setPage}) {
  const style = {
    color: 'black',
  }
  
  return (
    <div className='header container-fluid' style={style}>
      <header className='row'>
        <div className='row'>
          <div className='col-sm-4'>
            <h1>
              Javier B
            </h1>
          </div>
          <div className='col-sm-4 my-auto d-flex justify-content-center'>
            <Navigation page={page} setPage={setPage}/>
          </div>
          <div className='col-sm-4'></div>
        </div>
      </header>
    </div>
  )
}

export default Header;