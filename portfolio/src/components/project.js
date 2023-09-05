import React from "react";
import Home from "./home";
import Expertise from "./expertise";
import Work from "./work";

function Project({page}) {
  switch (page) {
    case 0:
      return <Home />;
    case 1:
      return <Expertise />;
    case 2:
      return <Work />;
    default:
      break;
  }
}

export default Project;