import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { updateJob } from '../store/jobsSlice'

const EditJob = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    salary: '',
    location: '',
    type: 'Full-Time',
    isRemote: false,
    postedDate: '',
    description: '',
    category: ''
  })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:3000/jobs/${id}`)
      .then(res => res.json())
      .then(data => {
        setFormData(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to fetch job')
        setLoading(false)
      })
  }, [id])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.title || !formData.company || !formData.salary || !formData.location || !formData.description) {
      setError('Please fill in all required fields')
      return
    }
    dispatch(updateJob({ id, jobData: { ...formData, salary: parseInt(formData.salary) } }))
      .then(() => navigate(`/jobs/${id}`))
      .catch(() => setError('Failed to update job'))
  }

  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div>
      <Navbar />

      <div className="job-detail-hero">
        <div className="job-detail-hero-content">
          <div className="job-detail-logo">{formData.company.charAt(0)}</div>
          <div className="job-detail-hero-text">
            <p className="job-detail-subtitle">Editing Job Listing</p>
            <h1 className="job-detail-title">{formData.title}</h1>
            <p className="job-detail-subtitle">{formData.company} — {formData.location}</p>
          </div>
        </div>
      </div>

      <div className="page-container">
        <Link to={`/jobs/${id}`} className="back-link">← Back to Job</Link>

        <div className="edit-layout">

          {/* Form */}
          <div className="edit-form-card">
            <h2 className="edit-form-title">Update Job Details</h2>
            <hr className="divider" />

            {error && <div className="error-banner">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="edit-form-grid">
                <div className="form-group">
                  <label>Job Title *</label>
                  <input name="title" value={formData.title} onChange={handleChange} placeholder="e.g. Frontend Developer" />
                </div>
                <div className="form-group">
                  <label>Company *</label>
                  <input name="company" value={formData.company} onChange={handleChange} placeholder="e.g. Google" />
                </div>
                <div className="form-group">
                  <label>Salary (USD) *</label>
                  <input name="salary" type="number" value={formData.salary} onChange={handleChange} placeholder="e.g. 95000" />
                </div>
                <div className="form-group">
                  <label>Location *</label>
                  <input name="location" value={formData.location} onChange={handleChange} placeholder="e.g. New York" />
                </div>
                <div className="form-group">
                  <label>Job Type</label>
                  <select name="type" value={formData.type} onChange={handleChange}>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select name="category" value={formData.category} onChange={handleChange}>
                    <option value="Technology">Technology</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Finance">Finance</option>
                    <option value="Design">Design</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Posted Date</label>
                  <input name="postedDate" type="date" value={formData.postedDate} onChange={handleChange} />
                </div>
                <div className="form-group edit-remote-group">
                  <label>Remote Position</label>
                  <div className="form-check">
                    <input name="isRemote" type="checkbox" checked={formData.isRemote} onChange={handleChange} />
                    <span>{formData.isRemote ? 'Yes — Remote' : 'No — On Site'}</span>
                  </div>
                </div>
              </div>

              <div className="form-group" style={{ marginTop: '8px' }}>
                <label>Description *</label>
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Describe the role..." />
              </div>

              <div className="edit-form-actions">
                <button type="submit" className="btn btn-primary">Update Job</button>
                <Link to={`/jobs/${id}`} className="btn btn-secondary">Cancel</Link>
              </div>
            </form>
          </div>

          {/* Side Info */}
          <div className="edit-side">
            <div className="edit-side-card">
              <h3 className="edit-side-title">Editing</h3>
              <hr className="divider" />
              <div className="edit-side-info">
                <div className="detail-company-block">
                  <div className="detail-company-logo">{formData.company.charAt(0)}</div>
                  <div>
                    <h3 className="detail-company-name">{formData.title}</h3>
                    <p className="detail-company-location">{formData.company}</p>
                  </div>
                </div>
                <div className="edit-side-details">
                  <div className="detail-key-item">
                    <span className="detail-key-label">📍 Location</span>
                    <span className="detail-key-value">{formData.location || '—'}</span>
                  </div>
                  <div className="detail-key-item">
                    <span className="detail-key-label">💰 Salary</span>
                    <span className="detail-key-value">${parseInt(formData.salary || 0).toLocaleString()}</span>
                  </div>
                  <div className="detail-key-item">
                    <span className="detail-key-label">💼 Type</span>
                    <span className="detail-key-value">{formData.type}</span>
                  </div>
                  <div className="detail-key-item">
                    <span className="detail-key-label">🌍 Remote</span>
                    <span className="detail-key-value">{formData.isRemote ? 'Yes' : 'No'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="edit-side-card" style={{ marginTop: '16px', background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.12)' }}>
              <h3 className="edit-side-title" style={{ color: '#dc2626' }}>Delete Job</h3>
              <hr className="divider" />
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '14px' }}>
                Permanently delete this job listing. This action cannot be undone.
              </p>
              <Link to={`/jobs/delete/${id}`} className="btn btn-danger" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                Delete 
              </Link>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default EditJob