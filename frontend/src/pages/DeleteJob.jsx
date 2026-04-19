import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteJob = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    navigate(`/jobs/${id}`)
  }, [])

  return null
}

export default DeleteJob