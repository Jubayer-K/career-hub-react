import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id == idInt);
  return (
    <div>
      <h1>Job details of : {id} </h1>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <h2>
            <span className="text-black text-xl">Job Description :</span>{" "}
            {job.job_description}{" "}
          </h2>
          <h2>
            <span className="text-black text-xl">Job Responsibility :</span>{" "}
            {job.job_responsibility}{" "}
          </h2>
          <div>
            <h2 className="text-black text-xl">Educational Requirements :</h2>
            <h2>{job.educational_requirements}</h2>
          </div>
          <div>
            <h2 className="text-black text-xl">Experiences :</h2>
            <h2>{job.experiences}</h2>
          </div>
        </div>
        <div>
          <div className="border bg-[#7E90FE10]">
            <h2>Job Details</h2>
            <hr />
            <div>Salary : {job.salary}</div>
            <div>Job Title : {job.job_title}</div>
            <h2>Contact Information</h2>
            <hr />
            <div>Phone : {job.contact_information.phone}</div>
            <div>Email : {job.contact_information.email}</div>
            <div>Address : {job.contact_information.address}</div>
          </div>
          <div><button className="btn btn-primary">Apply Now</button></div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
