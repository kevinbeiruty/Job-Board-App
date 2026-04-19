import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import JobCard from '../components/JobCard'
import { fetchJobs } from '../store/jobsSlice'

const Jobs = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { jobs, loading, error } = useSelector(state => state.jobs)

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const urlSearch = searchParams.get('search') || ''

  const [searchQuery, setSearchQuery] = useState(urlSearch)

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      navigate('/jobs')
    } else {
      navigate(`/jobs?search=${searchQuery}`)
    }
  }

  const filteredJobs = urlSearch
    ? jobs.filter(job =>
        job.title.toLowerCase().includes(urlSearch.toLowerCase()) ||
        job.company.toLowerCase().includes(urlSearch.toLowerCase()) ||
        job.description.toLowerCase().includes(urlSearch.toLowerCase()) ||
        (job.category && job.category.toLowerCase().includes(urlSearch.toLowerCase()))
      )
    : jobs

  useEffect(() => {
    dispatch(fetchJobs())
  }, [dispatch])

  if (loading) return <div className="loading">Loading jobs...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div>
      <Navbar />

      <PageHero
        title="Job Listings"
        subtitle="Browse and manage all available job opportunities"
      >

        {/* Search inside PageHero */}
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

        <Link to="/jobs/new" className="btn btn-white">
          + Post a New Job
        </Link>

      </PageHero>

      <div className="page-container">
        {urlSearch ? (
          <p className="results-count">
            {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found in "{urlSearch}"
          </p>
        ) : (
          <p className="results-count">{jobs.length} jobs found</p>
        )}

        <div className="jobs-grid">
          {filteredJobs.length > 0
            ? filteredJobs.map(job => <JobCard key={job.id} job={job} />)
            : (
              <div className="no-results">
                <p>No jobs found for "{urlSearch}"</p>
                <Link to="/jobs" className="btn btn-primary">
                  Clear Search
                </Link>
              </div>
            )
          }
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Jobs