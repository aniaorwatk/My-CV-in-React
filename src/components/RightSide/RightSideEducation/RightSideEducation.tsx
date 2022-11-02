import React from "react";
import dataEducation from "../../../data/dataRightSide/dataEducation";
import iconCalendar from "./../../../assets/calendar-days-solid.svg";
import "./RightSideEducation.scss"

const RightSideEducation =()=>{
    return(
        <div className="education">
             <h3 className="education__title">{dataEducation.title}</h3>
             <p>{dataEducation.studies}   <img
        className="jobBox__company-img iconCalendar"
        src={iconCalendar}
        alt="icon code"
      />  {dataEducation.period_studies}</p>
             <p>{dataEducation.department}</p>
        </div>
    )
}

export default RightSideEducation