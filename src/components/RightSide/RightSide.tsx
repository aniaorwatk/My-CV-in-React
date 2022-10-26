import React from "react";
import "./RightSide.scss"
import RightSideCourse from "./RightSideCourse/RightSideCourse";
import dataCourse from "./../../data/dataRightSide/dataProgrammingCourses";
import { renderCourses, renderobs } from "./RightSideHandler";
import RightSideJob from "./RightSideJob/RightSideJob";

const RightSide =()=>{
    return(
        <div className="rightSide">
<RightSideCourse 
courseInformation={renderCourses}
title={dataCourse.title}
/>
<RightSideJob 
                job={renderobs} />

        </div>
    )
}

export default RightSide