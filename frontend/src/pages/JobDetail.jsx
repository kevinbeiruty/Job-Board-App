import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { fetchJobById, deleteJob } from '../store/jobsSlice'

const JobDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { selectedJob: job, loading, error } = useSelector(state => state.jobs)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    dispatch(fetchJobById(id))
  }, [dispatch, id])

  const handleDelete = () => {
    dispatch(deleteJob(id))
      .then(() => navigate('/jobs'))
  }

  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div className="error">{error}</div>
  if (!job) return <div className="loading">Job not found</div>

  return (
    <div>
      <Navbar />

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-icon">🗑️</div>
            <h3 className="modal-title">Delete This Job?</h3>
            <p className="modal-text">
              You are about to permanently delete <strong>{job.title}</strong> at <strong>{job.company}</strong>. This cannot be undone.
            </p>
            <div className="modal-actions">
              <button onClick={handleDelete} className="btn btn-danger" style={{ flex: 1 }}>
                Yes, Delete
              </button>
              <button onClick={() => setShowModal(false)} className="btn btn-secondary" style={{ flex: 1 }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Job Hero */}
      <div className="job-detail-hero">
        <div className="job-detail-hero-content">
          <div className="job-detail-logo">{job.company.charAt(0)}</div>
          <div className="job-detail-hero-text">
            <div className="job-detail-badges">
              <span className="badge badge-blue">{job.type}</span>
              {job.isRemote && <span className="badge badge-green">Remote</span>}
              {job.category && <span className="badge badge-gray">{job.category}</span>}
            </div>
            <h1 className="job-detail-title">{job.title}</h1>
            <p className="job-detail-subtitle">{job.company} — {job.location}</p>
          </div>
        </div>
      </div>

      <div className="page-container">
        <Link to="/jobs" className="back-link">← Back to Listings</Link>

        <div className="detail-layout">
          <div className="detail-card">
            <h2 className="detail-section-title">About This Role</h2>
            <hr className="divider" />
            <p className="detail-description">{job.description}</p>
            <h2 className="detail-section-title" style={{ marginTop: '28px' }}>Key Details</h2>
            <hr className="divider" />
            <div className="detail-key-grid">
              <div className="detail-key-item">
                <span className="detail-key-label">💰 Salary</span>
                <span className="detail-key-value">${job.salary.toLocaleString()} / year</span>
              </div>
              <div className="detail-key-item">
                <span className="detail-key-label">📍 Location</span>
                <span className="detail-key-value">{job.location}</span>
              </div>
              <div className="detail-key-item">
                <span className="detail-key-label">💼 Job Type</span>
                <span className="detail-key-value">{job.type}</span>
              </div>
              <div className="detail-key-item">
                <span className="detail-key-label">🌍 Remote</span>
                <span className="detail-key-value">{job.isRemote ? 'Yes' : 'No'}</span>
              </div>
              <div className="detail-key-item">
                <span className="detail-key-label">📅 Posted</span>
                <span className="detail-key-value">{job.postedDate}</span>
              </div>
              <div className="detail-key-item">
                <span className="detail-key-label">🏢 Company</span>
                <span className="detail-key-value">{job.company}</span>
              </div>
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-salary-banner">
              <p className="detail-salary-label">Annual Salary</p>
              <h3 className="detail-salary-value">${job.salary.toLocaleString()}</h3>
            </div>
            <hr className="divider" />
            <Link
              to={`/jobs/edit/${job.id}`}
              className="btn btn-primary"
              style={{ width: '100%', textAlign: 'center', marginBottom: '10px', display: 'block' }}
            >
              Edit This Job
            </Link>
            <button
              onClick={() => setShowModal(true)}
              className="btn btn-danger"
              style={{ width: '100%', textAlign: 'center', display: 'block' }}
            >
              Delete This Job
            </button>
            <hr className="divider" />
            <div className="detail-company-block">
              <div className="detail-company-logo">{job.company.charAt(0)}</div>
              <div>
                <h3 className="detail-company-name">{job.company}</h3>
                <p className="detail-company-location">📍 {job.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default JobDetail