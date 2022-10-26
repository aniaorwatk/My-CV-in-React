import React from "react";
import "./RightSide.scss"
import RightSideCourse from "./RightSideCourse/RightSideCourse";
import dataCourse from "./../../data/dataRightSide/dataProgrammingCourses";
import { renderCourses } from "./RightSideHandler";

const RightSide =()=>{
    return(
        <div className="rightSide">
<RightSideCourse 
courseInformation={renderCourses}
title={dataCourse.title}
/>

        </div>
    )
}

export default RightSide