import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="navbar-brand">Job<span>Board</span></span>
      <div className="navbar-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
      </div>
    </nav>
  )
}

export default Navbar