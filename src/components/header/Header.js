import React from "react";
import headerImg from "../../assets/job-logo.svg";

function Header() {
  return (
    <div className="header">
      <img src={headerImg} alt="" />
      <h1>GITHUB JOB FINDER</h1>
    </div>
  );
}

export default Header;
