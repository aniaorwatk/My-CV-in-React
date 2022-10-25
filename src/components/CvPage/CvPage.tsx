import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LeftSide from "../LeftSide/LeftSide";
import "./CvPage.scss";


const CVPage = () => {
  return (
    <div className="CvPage">
      <Header />
      <div className="CvPage__main">
        <LeftSide />
      </div>
      <Footer />
    </div>
  );
};


export default CVPage;
