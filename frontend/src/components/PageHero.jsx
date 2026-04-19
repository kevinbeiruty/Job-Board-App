const PageHero = ({ title, subtitle, children }) => {
  return (
    <div className="page-hero">
      <div className="page-hero-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {children && <div className="hero-actions">{children}</div>}
    </div>
  )
}

export default PageHero