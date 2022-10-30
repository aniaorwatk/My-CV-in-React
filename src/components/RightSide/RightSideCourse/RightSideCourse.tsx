import React from "react";
import dataCourse from "./../../../data/dataRightSide/dataProgrammingCourses";
import "./RightSideCourse.scss";

interface IRightSideCourseType {
  courseInformation: JSX.Element | JSX.Element[];
}

const RightSideCourse = ({ courseInformation }: IRightSideCourseType) => {
  return (
    <div className="course">
      <h3 className="course__title">{dataCourse.title}</h3>
      <ul>{courseInformation}</ul>
    </div>
  );
};

export default RightSideCourse;
