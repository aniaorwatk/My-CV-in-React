import LeftSideContact from "./LeftSideContact/LeftSideContact";
import LeftSideGitHub from "./LeftSideGitHub/LeftSideGitHub";
import LeftSideRenderData from "./LeftSideRenderData";
import {
  skills,
  softSkills,
  hobbys,
} from "./LeftSideHandler";
import labels from "../../labels";
import dataSkills from "../../data/dataLeftSide/dataSkills";
import dataSoftSkills from "../../data/dataLeftSide/dataSoftSkliis";
import dataHobbys from "../../data/dataLeftSide/dataHobbys";
import imgAOK from "./../../assets/photo.jpg";
import "./LeftSide.scss";

const LeftSide = () => {
  return (
    <div className="leftSide">
      <img
        className="leftSide__img"
        src={imgAOK}
        alt={labels.leftSide.altMyImg}
      />
      <div className="leftSide__boxInformations">
        <LeftSideGitHub />
        <LeftSideContact />
        <LeftSideRenderData
          title={dataSkills.title}
          list={skills}
        />
        <LeftSideRenderData
          title={dataSoftSkills.title}
          list={softSkills}
        />
        <LeftSideRenderData
          title={dataHobbys.title}
          list={hobbys}
        />
      </div>
    </div>
  );
};

export default LeftSide;
