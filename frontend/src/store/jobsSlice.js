import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const API_URL = import.meta.env.VITE_API_URL

// Fetch all jobs
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const response = await fetch(`${API_URL}/jobs`)
  return response.json()
})

// Fetch single job
export const fetchJobById = createAsyncThunk('jobs/fetchJobById', async (id) => {
  const response = await fetch(`${API_URL}/jobs/${id}`)
  return response.json()
})

// Add job
export const addJob = createAsyncThunk('jobs/addJob', async (jobData) => {
  const response = await fetch(`${API_URL}/jobs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(jobData)
  })
  return response.json()
})

// Update job
export const updateJob = createAsyncThunk('jobs/updateJob', async ({ id, jobData }) => {
  const response = await fetch(`${API_URL}/jobs/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(jobData)
  })
  return response.json()
})

// Delete job
export const deleteJob = createAsyncThunk('jobs/deleteJob', async (id) => {
  await fetch(`${API_URL}/jobs/${id}`, { method: 'DELETE' })
  return id
})

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    selectedJob: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all jobs
      .addCase(fetchJobs.pending, (state) => { state.loading = true })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false
        state.jobs = action.payload
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.loading = false
        state.error = 'Failed to fetch jobs'
      })
      // Fetch single job
      .addCase(fetchJobById.pending, (state) => { state.loading = true })
      .addCase(fetchJobById.fulfilled, (state, action) => {
        state.loading = false
        state.selectedJob = action.payload
      })
      .addCase(fetchJobById.rejected, (state) => {
        state.loading = false
        state.error = 'Failed to fetch job'
      })
      // Add job
      .addCase(addJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload)
      })
      // Update job
      .addCase(updateJob.fulfilled, (state, action) => {
        const index = state.jobs.findIndex(j => j.id === action.payload.id)
        if (index !== -1) state.jobs[index] = action.payload
      })
      // Delete job
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.jobs = state.jobs.filter(j => j.id !== action.payload)
      })
  }
})

export default jobsSlice.reducer