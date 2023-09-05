import React from "react";



function Navigation({page, setPage}) {

  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a className={(page === 0) ? 'nav-link active' : 'nav-link'} onClick={() => setPage(0)}>Home</a>
      </li>
      <li className="nav-item">
        <a className={(page === 1) ? 'nav-link active' : 'nav-link'} onClick={() => setPage(1)}>Expertise</a>
      </li>
      <li className="nav-item">
        <a className={(page === 2) ? 'nav-link active' : 'nav-link'} onClick={() => setPage(2)}>Work</a>
      </li>
    </ul>
  )
}

export default Navigation;