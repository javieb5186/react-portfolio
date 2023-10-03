import React from "react";

const style = {
  backgroundImage: 'url(/profileT.png)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '35%',
}

function Home() {
  return (
    <div className='sec row d-flex align-items-center home' style={style}>
      <div className='col'>
        <p className='display-1 text-center'>Javier B</p>
        <p className='display-6 text-center'>Game, Full Stack Developer, and App Developer</p>
        <p className='h6 text-center'>
          Programming is my favorite thing to do no matter the subject. I have done so in game development, 
          web development, software development, and many more. I can do creative work as well but my main focus is 
          engineering. I have great social and communicative skills. I am not afraid to work, colloborate, or share with others. 
          Thank you for checking out my portfolio! Enjoy the rest of the content and feel free to contact me for any questions or 
          an opportunity to work together.  
        </p>
      </div>
    </div>
  );
}

export default Home;