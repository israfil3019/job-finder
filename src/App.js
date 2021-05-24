import "./App.scss";
import loadingGif from "./assets/loading.gif";
import notFound from "./assets/404.png";
import Form from "./components/form/Form";
import JobCard from "./components/jobcard/JobCard";
import Header from "./components/header/Header";
import axios from "axios";
import { useState } from "react";
import Footer from "./components/footer/Footer";

function App() {
  const [loading, setLoading] = useState(false);
  const [jobs, setjobs] = useState();

  const newQuery = (description, location) => {
    setLoading(true);
    axios({
      method: "get",
      url: `/positions.json?description=${description}&location=${location}`,
    })
      .then((res) => {
        setjobs(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="App">
      <Header />
      <Form newQuery={newQuery} />
      {jobs?.length === 0 ? (
        <img className="notfound" src={notFound} alt="not found" />
      ) : null}
      {loading ? (
        <img classname="loading" src={loadingGif} alt="loading" />
      ) : null}

      {jobs?.map((job) => (
        <JobCard job={job} key={job.id} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
