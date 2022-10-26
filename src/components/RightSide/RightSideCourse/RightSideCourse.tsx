import React from "react";
import "./RightSideCourse.scss";

interface IRightSideCourseType {
  title: string;
  courseInformation: JSX.Element | JSX.Element[];
}

const RightSideCourse = ({
  courseInformation,
  title,
}: IRightSideCourseType) => {
  return (
    <div className="course">
      <h3 className="course__title">{title}</h3>
      <ul>{courseInformation}</ul>
    </div>
  );
};

export default RightSideCourse;
