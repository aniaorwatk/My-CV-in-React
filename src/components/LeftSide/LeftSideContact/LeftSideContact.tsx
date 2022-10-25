import React from "react";
import labels from "../../../labels";
import {
  contact,
  iconContactEmail,
  iconContactPhone,
  iconContactPlace,
} from "../LeftSideHandler";
import "./LeftSideContact.scss";

const LeftSideContact = () => {
  return (
    <div className="contact">
      <h3>{contact.title}</h3>
      <p>
        <img className="contact__img" src={iconContactPhone} alt={labels.leftSide.contact.atlPhone} />
        {contact.phoneNr}
      </p>
      <p>
        <img className="contact__img" src={iconContactPlace} alt={labels.leftSide.contact.altPlace} />

        {contact.city}
      </p>
      <p>
        <img className="contact__img" src={iconContactEmail} alt={labels.leftSide.contact.altEmail} />

        {contact.email}
      </p>
    </div>
  );
};

export default LeftSideContact;
