import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-logo">Job<span>Board</span></span>
          <p className="footer-tagline">Connecting talent with opportunity.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Platform</h4>
            <Link to="/jobs">Browse Jobs</Link>
            <Link to="/jobs/new">Post a Job</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>
            <span className="footer-sep">|</span>
          <div className="footer-col">
            <h4>Social</h4>
            <a href="" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="" target="_blank" rel="noreferrer">Twitter</a>
            <a href="" target="_blank" rel="noreferrer">Instagram</a>
            <a href="" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 JobBoard. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer