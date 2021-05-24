import React from "react";
import octocat from "../../assets/octocat.png";
import headerImg from "../../assets/job-logo.svg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={octocat} alt="octocat" />
      <img src={headerImg} alt="desk" />
      <h1>GITHUB JOB FINDER</h1>
    </div>
  );
}

export default Header;
