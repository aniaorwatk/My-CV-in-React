import React from "react";
import {
  contact
} from "../LeftSideHandler";
import "./LeftSideContact.scss";

const LeftSideContact = () => {
  return (
    <div className="contact">
      <h3>{contact.title}</h3>
      <p>
        {contact.phoneNr}
      </p>
      <p>
        {contact.city}
      </p>
      <p>
        {contact.email}
      </p>
    </div>
  );
};

export default LeftSideContact;
