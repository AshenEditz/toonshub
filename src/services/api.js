import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const getData = async () => {
  const response = await api.get('/data')
  return response.data
}

export const postData = async (data) => {
  const response = await api.post('/data', data)
  return response.data
}

export default api