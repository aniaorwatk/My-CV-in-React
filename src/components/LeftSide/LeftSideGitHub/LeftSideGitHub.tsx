import React from "react";
import { gitHub } from "../LeftSideHandler";
import "./LeftSideGitHub.scss";

const LeftSideGitHub = () => {
  return (
    <div className="gitHub">
      <h3>{gitHub.page}</h3>
      <h3>{gitHub.name}</h3>
    </div>
  );
};

export default LeftSideGitHub;
