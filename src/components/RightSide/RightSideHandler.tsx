import React from "react";
import dataCourse from "./../../data/dataRightSide/dataProgrammingCourses";
import dataJobs from "./../../data/dataRightSide/dataExperience";
import iconCodeSolid from "./../../assets/code-solid.svg";

const iconCodeSolidCourse = iconCodeSolid;

export const renderCourses = dataCourse.data.map((item) => {
  return (
    <li key={item.title_course} className="nameCourse">
      <img
        className="nameCourse__img"
        src={iconCodeSolidCourse}
        alt="icon code"
      />
      <span className="nameCourse__title">{item.title_course}</span> -{" "}
      {item.name_platform} {item.certificate && "- "}
      {item.certificate}
    </li>
  );
});

export const renderobs = dataJobs.data.map((item) => {
  return (
    <li key={item.period_employment} className="jobBox">
      <p className="jobBox__name">{item.job} </p>
      <p className="jobBox__company">
        {item.company} {item.period_employment}
      </p>
      <p className="jobBox__responsibilities">{item.job_responsibilities}</p>
    </li>
  );
});
