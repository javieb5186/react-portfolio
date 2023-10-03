import React from "react";

function Resume() {
  return (
    <div className='sec row d-flex'>
      <div className='col'>
        <p className='display-1 text-center'>Resume</p>
          <p>
            Download Resume <a href="">Here</a>
          </p>
          <h1>Front End Proficiencies</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>Bootstrap</li>
            <li>Local Storage</li>
            <li>Session Storage</li>
            <li>IndexedDB</li>
            <li>React.js</li>
          </ul>
          <h1>Back End Proficiencies</h1>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>User Authentication</li>
            <li>Template Engines</li>
            <li>ORM</li>
            <li>MongoDB</li>
            <li>MySql</li>
            <li>GraphQl</li>
          </ul>
      </div>
    </div>
  );
}

export default Resume;