import React from "react";
import design from "../../assets/design.svg";

function Footer() {
  return (
    <div className="footer">
      <strong>
        Designed
        <img src={design} alt="design" />
        My Way
      </strong>
    </div>
  );
}

export default Footer;
