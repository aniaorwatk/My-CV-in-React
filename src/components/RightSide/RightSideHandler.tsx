import React from "react";
import dataCourse from "./../../data/dataRightSide/dataProgrammingCourses";
import iconCodeSolid from "./../../assets/code-solid.svg";

const iconCodeSolidCourse = iconCodeSolid;

export const renderCourses = dataCourse.data.map((item) => {
  return (
    <li className="nameCourse">
      <img
        className="nameCourse__img"
        src={iconCodeSolidCourse}
        alt="icon code"
      />
     <span className="nameCourse__title">{item.title_course}</span>  - {item.name_platform} {item.certificate && "- "}
      {item.certificate}
    </li>
  );
});
