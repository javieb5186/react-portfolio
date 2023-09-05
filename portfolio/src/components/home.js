import React from "react";

const style = {
  backgroundImage: 'url(' + '/profileT.png' + ')',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '35%',
}

function Home() {
  return (
    <div className='sec row d-flex align-items-center' style={style}>
      <div className='col'>
        <p className='display-1 text-center'>Javier B</p>
        <p className='display-6 text-center'>Game Developer, Full Stack Developer, and App Developer</p>
        <p className='h6 text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. 
        </p>
      </div>
    </div>
  );
}

export default Home;