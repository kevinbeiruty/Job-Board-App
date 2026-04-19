import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [cooldown, setCooldown] = useState(0)

  useEffect(() => {
    if (cooldown <= 0) return
    const timer = setInterval(() => {
      setCooldown(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [cooldown])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.trim().length < 20) newErrors.message = 'Message must be at least 20 characters'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
    setCooldown(60)
    setErrors({})
  }

  const handleSendAnother = () => {
    setSubmitted(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  if (submitted) {
    return (
      <div>
        <Navbar />
        <div className="contact-page">
          <div className="contact-success">
            <div className="contact-success-card">
              <div className="contact-success-icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
<path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M29.081,42.748	l-10.409-9.253l2.657-2.99l7.591,6.747L44,21l3.414,3.414L29.081,42.748z"></path>
</svg></div>
              <h2>Message Sent!</h2>
              <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
              <div className="contact-success-details">
                <div className="contact-success-item">
                  <span className="contact-detail-label">Name</span>
                  <span className="contact-detail-value">{formData.name}</span>
                </div>
                <div className="contact-success-item">
                  <span className="contact-detail-label">Email</span>
                  <span className="contact-detail-value">{formData.email}</span>
                </div>
                <div className="contact-success-item">
                  <span className="contact-detail-label">Subject</span>
                  <span className="contact-detail-value">{formData.subject}</span>
                </div>
              </div>

              {cooldown > 0 ? (
                <div className="cooldown-banner">
                  <span className="cooldown-timer">{cooldown}s</span>
                  <p>Please wait before sending another message</p>
                </div>
              ) : (
                <button
                  className="contact-submit-btn"
                  onClick={handleSendAnother}
                >
                  SEND ANOTHER MESSAGE →
                </button>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <div className="contact-page">
        <div className="contact-split">
          <div className="contact-left">
            <h1 className="contact-heading">CONTACT</h1>
            <p className="contact-intro">
              Have a question, feedback, or just want to say hello?
              We'd love to hear from you. Reach out and we'll get
              back to you as soon as possible.
            </p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <span className="contact-detail-label">Address</span>
                <span className="contact-detail-value">123 JobBoard Ave, New York, NY 10001</span>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-label">Phone</span>
                <span className="contact-detail-value">+1 (111) 123-4567</span>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-label">E-mail</span>
                <span className="contact-detail-value">support@jobboard.com</span>
              </div>
              <div className="contact-detail-item">
                <span className="contact-detail-label">Hours</span>
                <span className="contact-detail-value">Mon - Fri, 9am - 6pm EST</span>
              </div>
            </div>
            <div className="contact-socials">
              <span className="contact-social-link">LinkedIn</span>
              <span className="contact-social-link">Twitter</span>
              <span className="contact-social-link">Facebook</span>
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-form-card">
              <h2 className="contact-form-heading">CONTACT FORM</h2>
              <form onSubmit={handleSubmit}>
                <div className="contact-field">
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
                  {errors.name && <p className="contact-error">{errors.name}</p>}
                </div>
                <div className="contact-field">
                  <input name="email" value={formData.email} onChange={handleChange} placeholder="Your email" />
                  {errors.email && <p className="contact-error">{errors.email}</p>}
                </div>
                <div className="contact-field">
                  <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Your subject" />
                  {errors.subject && <p className="contact-error">{errors.subject}</p>}
                </div>
                <div className="contact-field">
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" />
                  {errors.message && <p className="contact-error">{errors.message}</p>}
                </div>
                <button type="submit" className="contact-submit-btn">
                  SEND MESSAGE →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact