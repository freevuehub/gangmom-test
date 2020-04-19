import axios from 'axios'
import endPoint from './end.point'

const get = {
  posts: axios.get(`${endPoint.protocol}${endPoint.base}/posts`),
  detail: (id) => axios.get(`${endPoint.protocol}${endPoint.base}/posts/${id}`),
}

export {
  get,
}
