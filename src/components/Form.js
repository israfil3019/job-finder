import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { setInput } from "../helper/inputHelper";

const Form = () => {
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState("");

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

  return (
    <div>
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
  );
};

export default Form;
