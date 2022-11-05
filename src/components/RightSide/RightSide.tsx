import RightSideCourse from "./RightSideCourse/RightSideCourse";
import RightSideJob from "./RightSideJob/RightSideJob";
import RightSideEducation from "./RightSideEducation/RightSideEducation";
import { renderCourses, renderobs } from "./RightSideHandler";
import "./RightSide.scss";

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
