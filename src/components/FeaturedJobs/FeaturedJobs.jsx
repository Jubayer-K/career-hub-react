import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-5xl font-extrabold text-center ">
          Featured Jobs {jobs.length}
        </h2>
        <br />
        <p className="text-center text-base font-medium text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        {jobs.map(job => <Job key={job.id} job = {job}></Job>)}
      </div>
    </div>
  );
};

export default FeaturedJobs;
