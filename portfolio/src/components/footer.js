import React, { useState } from "react";
import Contact from "./contact";

function Footer() {
  const [validEmail, setValidEmail] = useState(true);
  const [emptyName, setEmptyName] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyMessage, setEmptyMessage] = useState(false);

  return (
    <div className='sec row d-flex align-items-around'>
      <p className='display-3 text-center'>Contact</p>
      <div className='row'>
        <div className='col'>
          <Contact 
            validEmail={validEmail} 
            setValidEmail={setValidEmail}
            emptyName={emptyName}
            setEmptyName={setEmptyName}
            emptyEmail={emptyEmail}
            setEmptyEmail={setEmptyEmail}
            emptyMessage={emptyMessage}
            setEmptyMessage={setEmptyMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;