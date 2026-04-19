const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// In-memory dataset
let jobs = [
  {
    id: 1,
    title: 'Marketing Manager',
    company: 'Shopify',
    salary: 82000,
    location: 'Toronto',
    type: 'Full-Time',
    isRemote: true,
    postedDate: '2026-01-10',
    category: 'Marketing',
    description: 'Lead our marketing campaigns and grow brand awareness across multiple channels.'
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'Amazon',
    salary: 105000,
    location: 'Seattle',
    type: 'Full-Time',
    isRemote: false,
    postedDate: '2026-01-20',
    category: 'Technology',
    description: 'Looking for a Node.js backend developer to join our growing team.'
  },
  {
    id: 3,
    title: 'Registered Nurse',
    company: 'Mayo Clinic',
    salary: 72000,
    location: 'Rochester',
    type: 'Full-Time',
    isRemote: false,
    postedDate: '2026-01-22',
    category: 'Healthcare',
    description: 'Provide exceptional patient care in our world-renowned medical facility.'
  },
  {
    id: 4,
    title: 'Financial Analyst',
    company: 'Goldman Sachs',
    salary: 95000,
    location: 'New York',
    type: 'Full-Time',
    isRemote: false,
    postedDate: '2026-01-25',
    category: 'Finance',
    description: 'Analyze financial data and provide investment recommendations to clients.'
  },
  {
    id: 5,
    title: 'UI/UX Designer',
    company: 'Apple',
    salary: 88000,
    location: 'San Francisco',
    type: 'Full-Time',
    isRemote: false,
    postedDate: '2026-02-01',
    category: 'Design',
    description: 'Join our design team to create beautiful and intuitive user experiences.'
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    company: 'Netflix',
    salary: 112000,
    location: 'Los Angeles',
    type: 'Contract',
    isRemote: true,
    postedDate: '2026-02-15',
    category: 'Technology',
    description: 'Manage and improve our CI/CD pipelines and cloud infrastructure.'
  },
  {
    id: 7,
    title: 'High School Teacher',
    company: 'NYC Department of Education',
    salary: 58000,
    location: 'New York',
    type: 'Full-Time',
    isRemote: false,
    postedDate: '2026-01-18',
    category: 'Education',
    description: 'Inspire and educate students in a dynamic and supportive learning environment.'
  },
  {
    id: 8,
    title: 'Frontend Developer',
    company: 'Google',
    salary: 95000,
    location: 'New York',
    type: 'Full-Time',
    isRemote: true,
    postedDate: '2026-01-15',
    category: 'Technology',
    description: 'We are looking for a skilled Frontend Developer with React experience.'
  },
  {
    id: 9,
    title: 'Graphic Designer',
    company: 'Adobe',
    salary: 75000,
    location: 'San Jose',
    type: 'Full-Time',
    isRemote: true,
    postedDate: '2026-02-05',
    category: 'Design',
    description: 'Create stunning visual content for our marketing and product teams.'
  },
  {
    id: 10,
    title: 'Content Marketing Specialist',
    company: 'HubSpot',
    salary: 68000,
    location: 'Boston',
    type: 'Full-Time',
    isRemote: true,
    postedDate: '2026-02-08',
    category: 'Marketing',
    description: 'Create compelling content strategies that drive traffic and generate leads.'
  },
  {
    id: 11,
    title: 'Data Analyst',
    company: 'Microsoft',
    salary: 78000,
    location: 'Austin',
    type: 'Part-Time',
    isRemote: true,
    postedDate: '2026-02-10',
    category: 'Technology',
    description: 'Analyze large datasets and provide actionable business insights.'
  },
  {
    id: 12,
    title: 'Physician Assistant',
    company: 'Cleveland Clinic',
    salary: 98000,
    location: 'Cleveland',
    type: 'Full-Time',
    isRemote: false,
    postedDate: '2026-02-12',
    category: 'Healthcare',
    description: 'Work alongside physicians to provide high quality patient care and treatment.'
  },
  {
    id: 13,
    title: 'Investment Banker',
    company: 'Morgan Stanley',
    salary: 135000,
    location: 'New York',
    type: 'Full-Time',
    isRemote: false,
    postedDate: '2026-01-28',
    category: 'Finance',
    description: 'Execute complex financial transactions and advise clients on capital markets.'
  },
  {
    id: 14,
    title: 'Mobile Developer',
    company: 'Meta',
    salary: 98000,
    location: 'Chicago',
    type: 'Full-Time',
    isRemote: false,
    postedDate: '2026-02-20',
    category: 'Technology',
    description: 'Build and maintain cross-platform mobile applications using React Native.'
  },
  {
    id: 15,
    title: 'University Lecturer',
    company: 'MIT',
    salary: 92000,
    location: 'Cambridge',
    type: 'Full-Time',
    isRemote: false,
    postedDate: '2026-02-03',
    category: 'Education',
    description: 'Teach and mentor students in computer science and software engineering.'
  },
  {
    id: 16,
    title: 'SEO Specialist',
    company: 'Airbnb',
    salary: 72000,
    location: 'San Francisco',
    type: 'Contract',
    isRemote: true,
    postedDate: '2026-02-17',
    category: 'Marketing',
    description: 'Optimize our web presence and drive organic growth through SEO strategies.'
  },
  {
    id: 17,
    title: 'Brand Designer',
    company: 'Nike',
    salary: 85000,
    location: 'Portland',
    type: 'Full-Time',
    isRemote: false,
    postedDate: '2026-02-22',
    category: 'Design',
    description: 'Shape the visual identity of one of the worlds most recognized brands.'
  },
  {
    id: 18,
    title: 'Risk Analyst',
    company: 'JPMorgan Chase',
    salary: 88000,
    location: 'Chicago',
    type: 'Full-Time',
    isRemote: false,
    postedDate: '2026-02-14',
    category: 'Finance',
    description: 'Identify and assess financial risks to protect company assets and investments.'
  },
  {
    id: 19,
    title: 'Cybersecurity Engineer',
    company: 'IBM',
    salary: 118000,
    location: 'Washington DC',
    type: 'Full-Time',
    isRemote: true,
    postedDate: '2026-02-18',
    category: 'Technology',
    description: 'Protect our systems and networks from cyber threats and vulnerabilities.'
  },
  {
    id: 20,
    title: 'Online Course Instructor',
    company: 'Coursera',
    salary: 65000,
    location: 'Mountain View',
    type: 'Part-Time',
    isRemote: true,
    postedDate: '2026-02-25',
    category: 'Education',
    description: 'Develop and deliver engaging online courses to thousands of students worldwide.'
  },
  {
    id: 21,
    title: 'Physical Therapist',
    company: 'Johns Hopkins',
    salary: 82000,
    location: 'Baltimore',
    type: 'Full-Time',
    isRemote: false,
    postedDate: '2026-02-28',
    category: 'Healthcare',
    description: 'Help patients recover and improve their physical mobility and quality of life.'
  },
  {
    id: 22,
    title: 'Motion Designer',
    company: 'Spotify',
    salary: 79000,
    location: 'New York',
    type: 'Full-Time',
    isRemote: true,
    postedDate: '2026-03-01',
    category: 'Design',
    description: 'Create engaging motion graphics and animations for our digital products.'
  },
  {
    id: 23,
    title: 'Cloud Architect',
    company: 'Salesforce',
    salary: 142000,
    location: 'San Francisco',
    type: 'Full-Time',
    isRemote: true,
    postedDate: '2026-03-02',
    category: 'Technology',
    description: 'Design and implement scalable cloud solutions for enterprise clients.'
  },
  {
    id: 24,
    title: 'Accountant',
    company: 'Deloitte',
    salary: 74000,
    location: 'Dallas',
    type: 'Full-Time',
    isRemote: false,
    postedDate: '2026-03-03',
    category: 'Finance',
    description: 'Manage financial records and ensure compliance with accounting standards.'
  }
]

// GET all jobs
app.get('/jobs', (req, res) => {
  res.json(jobs)
})

// GET single job
app.get('/jobs/:id', (req, res) => {
  const job = jobs.find(j => j.id === parseInt(req.params.id))
  if (!job) return res.status(404).json({ message: 'Job not found' })
  res.json(job)
})

// POST new job
app.post('/jobs', (req, res) => {
  const newJob = {
    id: jobs.length ? Math.max(...jobs.map(j => j.id)) + 1 : 1,
    ...req.body
  }
  jobs.push(newJob)
  res.status(201).json(newJob)
})

// PUT update job
app.put('/jobs/:id', (req, res) => {
  const index = jobs.findIndex(j => j.id === parseInt(req.params.id))
  if (index === -1) return res.status(404).json({ message: 'Job not found' })
  jobs[index] = { ...jobs[index], ...req.body }
  res.json(jobs[index])
})

// DELETE job
app.delete('/jobs/:id', (req, res) => {
  const index = jobs.findIndex(j => j.id === parseInt(req.params.id))
  if (index === -1) return res.status(404).json({ message: 'Job not found' })
  jobs.splice(index, 1)
  res.json({ message: 'Job deleted successfully' })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});