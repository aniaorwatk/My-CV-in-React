import React from "react"
import dataSkills from "../../data/dataLeftSide/dataSkills"
import dataSoftSkills from "../../data/dataLeftSide/dataSoftSkliis"
import dataHobbys from "../../data/dataLeftSide/dataHobbys"
import iconChecked from "../../assets/circle-check-solid.svg"
import iconH from "../../assets/circle-h-solid.svg"
import iconStar from "../../assets/star-inside-circle.png"

export const iconSkills = iconChecked
export const iconHobbys = iconH
export const iconSoftSkills = iconStar

 export const skills =dataSkills.data.map((item)=>{
    return(
        <li  key={item.skill}>{item.skill}</li> 
    )
})

export const softSkills =dataSoftSkills.data.map((item)=>{
    return(
        <li key={item.soft_skill}>{item.soft_skill}</li> 
    )
})

export const hobbys =dataHobbys.data.map((item)=>{
    return(
        <li key={item.hobby}>{item.hobby}</li> 
    )
})
