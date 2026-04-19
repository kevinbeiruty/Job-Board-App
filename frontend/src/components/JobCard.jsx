import { Link } from 'react-router-dom'

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-card-left">
        <div className="job-card-company-logo">
          {job.company.charAt(0)}
        </div>
      </div>
      <div className="job-card-middle">
        <div className="job-card-top">
          <h2 className="job-title">{job.title}</h2>
          <div className="job-badges">
            <span className="badge badge-blue">{job.type}</span>
            {job.isRemote && <span className="badge badge-green">Remote</span>}
          </div>
        </div>
        <p className="job-company">{job.company}</p>
        <div className="job-meta">
          <span>📍 {job.location}</span>
          <span>📅 {job.postedDate}</span>
          <span>💼 {job.category}</span>
        </div>
        <p className="job-description">{job.description.substring(0, 120)}...</p>
      </div>
      <div className="job-card-right">
        <div className="job-salary">${job.salary.toLocaleString()}</div>
        <Link to={`/jobs/${job.id}`} className="btn btn-primary">View</Link>
        <Link to={`/jobs/edit/${job.id}`} className="btn btn-secondary">Edit</Link>
        <Link to={`/jobs/delete/${job.id}`} className="btn btn-danger">Delete</Link>
      </div>
    </div>
  )
}

export default JobCard