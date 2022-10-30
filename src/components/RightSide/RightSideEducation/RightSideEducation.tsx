import React from "react";
import dataEducation from "../../../data/dataRightSide/dataEducation";
import "./RightSideEducation.scss"

const RightSideEducation =()=>{
    return(
        <div className="education">
             <h3 className="education__title">{dataEducation.title}</h3>
             <p>{dataEducation.studies} - {dataEducation.period_studies}</p>
             <p>{dataEducation.department}</p>
        </div>
    )
}

export default RightSideEducation