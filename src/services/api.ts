import axios from 'axios'

const api = axios.create({
  baseURL: `https://www.googleapis.com/drive/v3/files?q=`,
})

export default api
