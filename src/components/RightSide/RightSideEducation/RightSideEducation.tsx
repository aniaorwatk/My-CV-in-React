import dataEducation from "../../../data/dataRightSide/dataEducation";
import labels from "../../../labels";
import iconCalendar from "./../../../assets/calendar-days-solid.svg";
import iconSchool from "./../../../assets/school-solid.svg"
import "./RightSideEducation.scss"

const RightSideEducation = () => {
    return (
        <div className="education">
            <h3 className="education__title">{dataEducation.title}</h3>
            <p className="education__name">{dataEducation.studies}  </p>
            <p className="education__school">
                <img
                    className="jobBox__company-img iconSchool"
                    src={iconSchool}
                    alt={labels.rightSide.altSchoolImg}
                />
                {dataEducation.department}
                <img
                    className="jobBox__company-img iconCalendar"
                    src={iconCalendar}
                    alt={labels.rightSide.altCalendarImg}
                />  {dataEducation.period_studies}
            </p>
        </div>
    )
}

export default RightSideEducation
