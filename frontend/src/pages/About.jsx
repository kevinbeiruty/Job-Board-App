import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <div className="about-hero">
        <div className="about-hero-content">
          <p className="about-hero-label">WHO WE ARE</p>
          <h1 className="about-hero-title">Connecting Talent<br />With Opportunity</h1>
          <p className="about-hero-subtitle">
            We believe finding the right job should be simple, transparent,
            and accessible for everyone — anywhere in the world.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="about-mission">
        <div className="about-mission-grid">
          <div className="about-mission-text">
            <p className="about-section-label">OUR STORY</p>
            <h2 className="about-section-title">Built for Job Seekers,<br />Powered by Purpose</h2>
            <p className="about-mission-body">
              JobBoard was founded in 2024 with a simple idea — job searching
              shouldn't be overwhelming. We set out to build a platform that
              puts clarity and simplicity first.
            </p>
            <p className="about-mission-body">
              Today, we've helped thousands of professionals land roles at
              companies they love, while helping employers find the right
              talent quickly and efficiently.
            </p>
          </div>
          <div className="about-mission-stats">
            <div className="about-stat">
              <h3>500+</h3>
              <p>Active Listings</p>
            </div>
            <div className="about-stat">
              <h3>200+</h3>
              <p>Partner Companies</p>
            </div>
            <div className="about-stat">
              <h3>10k+</h3>
              <p>Job Seekers</p>
            </div>
            <div className="about-stat">
              <h3>50+</h3>
              <p>Industries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="about-values">
        <p className="about-section-label center">OUR VALUES</p>
        <h2 className="about-section-title center">What We Stand For</h2>
        <div className="about-values-grid">
          <div className="about-value-card">
            <span className="about-value-icon">🎯</span>
            <h3>Transparency</h3>
            <p>Clear, honest job listings with real salary ranges and accurate company information.</p>
          </div>
          <div className="about-value-card">
            <span className="about-value-icon">🤝</span>
            <h3>Inclusivity</h3>
            <p>We welcome professionals from all backgrounds, industries, and experience levels.</p>
          </div>
          <div className="about-value-card">
            <span className="about-value-icon">🚀</span>
            <h3>Innovation</h3>
            <p>We continuously improve our platform to make job searching and hiring seamless.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="about-team">
        <p className="about-section-label center">THE PEOPLE</p>
        <h2 className="about-section-title center">Meet The Team</h2>
        <div className="about-team-grid">
          <div className="about-team-card">
            <div className="about-team-avatar">👨‍💼</div>
            <h3>James Anderson</h3>
            <p className="about-team-role">CEO & Founder</p>
            <p className="about-team-bio">10+ years of experience in HR and talent acquisition.</p>
          </div>
          <div className="about-team-card">
            <div className="about-team-avatar">👩‍💻</div>
            <h3>Sarah Mitchell</h3>
            <p className="about-team-role">CTO</p>
            <p className="about-team-bio">Full stack engineer with a passion for building great products.</p>
          </div>
          <div className="about-team-card">
            <div className="about-team-avatar">👨‍🎨</div>
            <h3>David Chen</h3>
            <p className="about-team-role">Head of Design</p>
            <p className="about-team-bio">UI/UX expert focused on creating intuitive user experiences.</p>
          </div>
          <div className="about-team-card">
            <div className="about-team-avatar">👩</div>
            <h3>Emily Roberts</h3>
            <p className="about-team-role">Head of Marketing</p>
            <p className="about-team-bio">Growth specialist helping companies reach the right candidates.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About