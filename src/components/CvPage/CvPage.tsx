import React from "react";
import Footer from "../Footer/Footer";
import LeftSide from "../LeftSide/LeftSide";
import "./CvPage.scss"

const CVPage =()=>{
    return(
           <div className='CvPage'>
            <div className='CvPage__main'>
                <LeftSide />
            </div>
    <Footer/>
  </div> 
    )

}

export default CVPage

