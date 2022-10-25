import React from "react";
import labels from "../../labels";
import imgAOK from "./../../assets/photo.jpg";
import LeftSideRenderData from "./LeftSideRenderData";
import {
  skills,
  softSkills,
  hobbys,
  iconSkills,
  iconSoftSkills,
  iconHobbys,
} from "./LeftSideHandler";
import dataSkills from "./../../data/dataLeftSide/dataSkills";
import dataSoftSkills from "../../data/dataLeftSide/dataSoftSkliis";
import dataHobbys from "../../data/dataLeftSide/dataHobbys";
import "./LeftSide.scss";
import LeftSideContact from "./LeftSideContact/LeftSideContact";
import LeftSideGitHub from "./LeftSideGitHub/LeftSideGitHub";

const LeftSide = () => {
  return (
    <div className="leftSide">
      <img
        className="leftSide__img"
        src={imgAOK}
        alt={labels.leftSide.altMyImg}
      />


      <LeftSideGitHub />

      <LeftSideContact />

      <LeftSideRenderData
        icon={iconSkills}
        title={dataSkills.title}
        list={skills}
      />
      <LeftSideRenderData
        icon={iconSoftSkills}
        title={dataSoftSkills.title}
        list={softSkills}
      />
      <LeftSideRenderData
        icon={iconHobbys}
        title={dataHobbys.title}
        list={hobbys}
      />
    </div>
  );
};

export default LeftSide;
