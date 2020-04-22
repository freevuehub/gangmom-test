import axios from 'axios'
import endPoint from './endpoint.config'

const get = {
  posts: axios.get(`${endPoint.protocol}${endPoint.base}/posts`),
  detail: (id) => axios.get(`${endPoint.protocol}${endPoint.base}/posts/${id}`),
  comments: (id) => axios.get(`${endPoint.protocol}${endPoint.base}/posts/${id}/comments`),
  users: axios.get(`${endPoint.protocol}${endPoint.base}/users`),
}

export {
  get,
}