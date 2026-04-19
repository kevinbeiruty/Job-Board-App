import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import './index.css'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Jobs from './pages/Jobs'
import JobDetail from './pages/JobDetail'
import AddJob from './pages/AddJob'
import EditJob from './pages/EditJob'
import DeleteJob from './pages/DeleteJob'

import { Provider } from 'react-redux'
import store from './store/index'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {path: '/about', element: <About /> },
  {path: '/contact', element: <Contact /> },
  {path: '/jobs', element: <Jobs /> }, 
  {path: '/jobs/new', element: <AddJob /> },
  {path: '/jobs/:id', element: <JobDetail /> },
  {path: '/jobs/edit/:id', element: <EditJob /> },
  {path: '/jobs/delete/:id', element: <DeleteJob /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
