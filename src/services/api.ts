import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000/api/' // Dev
  // baseURL: 'https://dc-dashgo.vercel.app/api/' // Production
})