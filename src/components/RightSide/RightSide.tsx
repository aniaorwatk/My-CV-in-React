import React from "react";
import "./RightSide.scss";
import RightSideCourse from "./RightSideCourse/RightSideCourse";
import dataCourse from "./../../data/dataRightSide/dataProgrammingCourses";
import { renderCourses, renderobs } from "./RightSideHandler";
import RightSideJob from "./RightSideJob/RightSideJob";
import RightSideEducation from "./RightSideEducation/RightSideEducation";

const RightSide = () => {
  return (
    <div className="rightSide">
      <RightSideCourse courseInformation={renderCourses} />
      <RightSideJob job={renderobs} />
      <RightSideEducation />
    </div>
  );
};

export default RightSide;
