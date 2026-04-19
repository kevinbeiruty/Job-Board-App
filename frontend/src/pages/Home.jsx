import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { fetchJobs } from '../store/jobsSlice'

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { jobs } = useSelector(state => state.jobs)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    dispatch(fetchJobs())
  }, [dispatch])

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/jobs?search=${encodeURIComponent(searchQuery.trim())}`)
    } else {
      navigate('/jobs')
    }
  }

  const handleTagClick = (tag) => {
  setSearchQuery(tag)
  navigate(`/jobs?search=${encodeURIComponent(tag)}`)
}
  const recentJobs = jobs.filter(job => {
    const posted = new Date(job.postedDate)
    const now = new Date()
    const diffHours = (now - posted) / (1000 * 60 * 60)
    return diffHours <= 24
  })

  const displayJobs = recentJobs.length > 0 ? recentJobs : jobs.slice(0, 4)
  return (
    <div>
      <Navbar />

  <div className="hero-stats-wrapper">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Dream Job <span>Today</span></h1>
          <p className="hero-subtitle">
            Browse hundreds of job listings across different industries, 
            locations, and work styles — all in one place.
          </p>
          <div className="hero-buttons">
            <Link to="/jobs" className="btn btn-white">Browse Jobs</Link>
            <Link to="/jobs/new" className="btn btn-outline-white">Post a Job</Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-card">
          <h2>500+</h2>
          <p>Job Listings</p>
        </div>
        <div className="stat-card">
          <h2>200+</h2>
          <p>Companies</p>
        </div>
        <div className="stat-card">
          <h2>50+</h2>
          <p>Industries</p>
        </div>
        <div className="stat-card">
          <h2>10k+</h2>
          <p>Job Seekers</p>
        </div>
      </div>
      </div>
      {/* Search Banner */}
<div className="search-banner">
  <div className="search-banner-content">
    <p className="search-banner-label">NOW HIRING</p>
    <h2 className="search-banner-title">Find Your Next Opportunity</h2>
    <p className="search-banner-subtitle">Search through hundreds of job listings</p>
    <div className="search-bar-wrapper">
      <input
        type="text"
        className="search-bar-input"
        placeholder="Job title, company, or keyword..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button className="search-bar-btn" onClick={handleSearch}>
        Search Jobs
      </button>
    </div>
    <div className="search-banner-tags">
  {['Assistant', 'Accountant', 'Developer', 'Designer', 'Architect'].map(tag => (
    <span
      key={tag}
      className={`search-banner-tag ${searchQuery === tag ? 'tag-active' : ''}`}
      onClick={() => setSearchQuery(tag)}
    >
      {tag}
    </span>
  ))}
</div>
  </div>
</div>

      {/* Recent Jobs Section */}
      <div className="recent-jobs-section">
        <div className="recent-jobs-header">
          <div>
            <h2 className="recent-jobs-title">Latest Roles</h2>
            <p className="recent-jobs-subtitle">
              {recentJobs.length > 0
                ? `${recentJobs.length} new jobs posted in the last 24 hours`
                : 'Most recently posted job listings'}
            </p>
          </div>
          <Link to="/jobs" className="btn btn-primary">View All Jobs</Link>
        </div>
        <div className="recent-jobs-grid">
          {displayJobs.map(job => (
            <Link to={`/jobs/${job.id}`} key={job.id} className="recent-job-card">
              <div className="recent-job-top">
                <div className="recent-job-badge">{job.type}</div>
                {job.isRemote && <div className="recent-job-badge remote-badge">Remote</div>}
              </div>
              <div className="recent-job-body">
                <h3 className="recent-job-title">{job.title}</h3>
                <p className="recent-job-company">{job.company}</p>
                <p className="recent-job-location">📍 {job.location}</p>
              </div>
              <div className="recent-job-footer">
                <span className="recent-job-salary">${job.salary.toLocaleString()}</span>
                <span className="recent-job-date">📅 {job.postedDate}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    
    {/* Job Categories */}
<div className="categories-section">
  <div className="categories-header">
    <div>
      <h2 className="categories-title">Browse by Category</h2>
      <p className="categories-subtitle">Explore opportunities across different industries</p>
    </div>
  </div>
  <div className="categories-grid">
    {[
      { label: 'Technology', icon: '💻' },
      { label: 'Marketing', icon: '📊' },
      { label: 'Finance', icon: '💰' },
      { label: 'Design', icon: '🎨' },
      { label: 'Healthcare', icon: '🏥' },
      { label: 'Education', icon: '📚' },
    ].map(cat => {
      const count = jobs.filter(j => j.category === cat.label).length
      return (
        <Link
          to={`/jobs?search=${cat.label}`}
          key={cat.label}
          className="category-card"
        >
          <span className="category-icon">{cat.icon}</span>
          <h3 className="category-label">{cat.label}</h3>
          <p className="category-count">{count} {count === 1 ? 'job' : 'jobs'} available</p>
        </Link>
      )
    })}
  </div>
</div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home