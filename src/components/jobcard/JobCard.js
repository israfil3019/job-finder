import React from "react";
import jobLogo from "../../assets/job-logo.svg";

function JobCard({ job }) {
  const ID = "id-" + job.id;
  return (
    <div className="card text-center pb-2">
      <div className="logo">
        <img src={job.company_logo ?? jobLogo} alt="company-logo" />
      </div>
      <h4 className="card-title text-danger fw-bold p-2">{job.title}</h4>
      <h5 className="card-title mt-2 fw-bold">{job.company}</h5>
      <p className="card-text">{job.type}</p>
      <a
        href={job.company_url}
        target="_blank"
        rel="noreferrer"
        className="btn btn-primary m-1"
      >
        Apply
      </a>

      <button
        type="button"
        className="btn btn-secondary mx-1"
        data-bs-toggle="modal"
        data-bs-target={"#" + ID}
      >
        Details
      </button>
      <div
        className="modal fade"
        id={ID}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {job.title}
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="extra">
                <div className="description">
                  <h3>Job Description</h3>
                  <div
                    className="desc"
                    dangerouslySetInnerHTML={{ __html: `${job.description}` }}
                  />
                </div>
                <div className="how-to-apply">
                  <h3>How to Apply?</h3>
                  <div
                    className="desc"
                    dangerouslySetInnerHTML={{
                      __html: `${job.how_to_apply}`,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <a className="link" href={job.company_url}>
                <button className="btn btn-primary" type="button">
                  Apply
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

JobCard.defaulProps = {
  company_logo:
    "https://media-exp1.licdn.com/dms/image/C4D0BAQHluPICZRkHsA/company-logo_200_200/0/1577449468769?e=2159024400&v=beta&t=SU8ArbCWLdttCIu6Qpc89ppAabgH_Q4r4ERr78bOP28",
  title: "Fullstack Developer",
  company: "Clarusway",
  type: "Full-time",
  company_url: "https://clarusway.com/",
  id: "xyz",
};

export default JobCard;
