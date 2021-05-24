import React from "react";
import octocat from "../../assets/octocat.png";
import headerImg from "../../assets/job-logo.svg";

function Header() {
  return (
    <div className="header">
      <div className="header-images">
        <img src={octocat} alt="octocat" />
        <img src={headerImg} alt="desk" />
      </div>
      <div className="header-heads">
        <h1>GITHUB</h1>
        <h1>JOB</h1>
        <h1>FINDER</h1>
      </div>
    </div>
  );
}

export default Header;
