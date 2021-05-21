import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { setInput } from "./helper/inputHelper";
import desk from "./assets/job-logo.svg";
import octocat from "./assets/octocat.png";
import design from "./assets/design.svg";
import loadingGif from "./assets/loading.gif";

function App() {
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    jobData(desc, location);
    console.log(`
    description: ${desc}
    location: ${location} 
    `);
    setJobList([
      {
        logo: jobData?.company_logo,
        name: jobData?.company,
        location: jobData?.location,
        title: jobData?.title,
        type: jobData?.type,
        url: jobData?.url,
      },
    ]);
    console.log(`
    logo: ${jobData.company_logo}
    name: ${jobData?.company}
    apply_url: ${jobData?.company_url}
    title: ${jobData?.title}
    `);
    setDesc("");
    setLocation("");
  };

  const jobData = (desc, location) => {
    setLoading(true);
    axios
      .get(`./positions.json?description=${desc}&location=${location}`)
      .then((res) => {
        setJobList(res.data);
        console.log(res.data);
      })
      .catch(() => {
        console.log("no data");
      });
    setLoading(false);
  };

  useEffect(() => {
    jobData();
  }, []);

  return (
    <div className="App">
      <div className="header">
        <img src={octocat} alt="octocat" />
        <img src={desk} alt="job-logo" />
      </div>
      <div className="search-area">
        <h1>Github Job Finder</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={desc}
            type="text"
            placeholder="Description"
            onChange={setInput(setDesc)}
          />
          <br />
          <input
            value={location}
            type="text"
            placeholder="Location"
            onChange={setInput(setLocation)}
          />
          <br />
          <button className="search-btn" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="search-result">
        {loading ? (
          <img src={loadingGif} alt="loading" className="loading" />
        ) : (
          <div>
            {jobList?.map((job, index) => (
              <div className="search-cards" key={index}>
                <div className="card-header-img">
                  <img src={job.logo} alt="" />
                  <p>{job.name}</p>
                </div>
                <div className="card-header-info">{job.title}</div>
                <div className="card-info">
                  <div>{job.location}</div>
                  <div>{job.type}</div>
                </div>
                <a
                  type="button"
                  href={job.url}
                  target="_blank"
                  rel="noreferrer"
                  className="apply-btn"
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="footer">
        <img src={design} alt="design" />
      </div>
    </div>
  );
}

export default App;
