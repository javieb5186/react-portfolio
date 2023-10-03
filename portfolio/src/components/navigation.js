import React from "react";

function Navigation({page, setPage}) {
  const defaultStyle = {
    color: 'black',
  }

  const selectedStyle = {
    color: 'lightgrey',
  }

  return (
    <ul className="nav d-flex">
      <li className="nav-item">
        <a className={'nav-l'} style={(page === 0) ? selectedStyle : defaultStyle} onClick={() => setPage(0)}>About Me</a>
      </li>
      <li className="nav-item">
        <a className={'nav-l'} style={(page === 1) ? selectedStyle : defaultStyle} onClick={() => setPage(1)}>Portfolio</a>
      </li>
      <li className="nav-item">
        <a className={'nav-l'} style={(page === 2) ? selectedStyle : defaultStyle} onClick={() => setPage(2)}>Contact</a>
      </li>
      <li className="nav-item">
        <a className={'nav-l'} style={(page === 3) ? selectedStyle : defaultStyle} onClick={() => setPage(3)}>Resume</a>
      </li>
    </ul>
  )
}

export default Navigation;