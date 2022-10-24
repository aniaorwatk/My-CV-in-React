import React from "react";
import labels from "../../labels";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">{labels.footer.textAgreement}</p>
    </footer>
  );
};

export default Footer;
