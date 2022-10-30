import React from "react";
import "./RightSideJob.scss";
import dataJobs from "./../../../data/dataRightSide/dataExperience";

interface IRightSideJobType {
  // title:string,
  job: JSX.Element | JSX.Element[];
}

const RightSideJob = ({ job }: IRightSideJobType) => {
  return (
    <div className="rightSideJobs">
      <h3 className="rightSideJobs__title">{dataJobs.title}</h3>
      <ul>{job}</ul>
    </div>
  );
};

export default RightSideJob;
