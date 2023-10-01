import React, {useState} from "react";
import Home from "./home";
import Expertise from "./expertise";
import Work from "./work";
import Contact from "./contact";
import Resume from "./resume";

function Project({page}) {
  const [validEmail, setValidEmail] = useState(true);
  const [emptyName, setEmptyName] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyMessage, setEmptyMessage] = useState(false);

  switch (page) {
    case 0:
      return <Home />;
    case 1:
      return (
        <>
          <Expertise />;
          <Work />;
        </>
      )
    case 2:
      return <Contact 
      validEmail={validEmail} 
      setValidEmail={setValidEmail}
      emptyName={emptyName}
      setEmptyName={setEmptyName}
      emptyEmail={emptyEmail}
      setEmptyEmail={setEmptyEmail}
      emptyMessage={emptyMessage}
      setEmptyMessage={setEmptyMessage}
    />;
    case 3:
      return <Resume />;
    default:
      break;
  }
}

export default Project;