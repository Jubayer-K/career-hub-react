import { MdLocationOn ,MdCurrencyExchange } from "react-icons/md";
import { Link } from "react-router-dom";
const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,} = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img src={logo} alt="company logo" /></figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex gap-4">
            <span className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</span>
            <span className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</span>
          </div>
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-2"><MdLocationOn></MdLocationOn>{location}</p>
            <p className="flex items-center gap-2"><MdCurrencyExchange></MdCurrencyExchange> {salary}</p>
          </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}><button  className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Job;