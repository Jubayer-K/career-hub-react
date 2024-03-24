import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loadData , setLoadData] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="lg:text-5xl text-2xl font-extrabold text-center mb-2 lg:mb-8">
          Featured Jobs {jobs.length}
        </h2>
        <p className="text-center text-base font-medium text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        {jobs.slice(0,loadData).map(job => <Job key={job.id} job = {job}></Job>)}
      </div>
      <div className={loadData === jobs.length && "hidden"}>
        <div className="text-center">
        <button onClick={() => setLoadData(jobs.length)} className="btn btn-primary ">Show All Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
