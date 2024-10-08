import axios from 'axios';
import Alpine from '../alpine';

const config = {

  baseURL: process.env.API_HOST,
  timeout: 60 * 1000 // Timeout
  // withCredentials: true // Check cross-site Access-Control
}

const client = axios.create(config)

client.interceptors.request.use(
  function (config) {

    if (localStorage.getItem('token')) {
      config.headers['Authorization'] = 'bearer ' + localStorage.getItem('token')
    }
    // console.log(config)
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
client.interceptors.response.use(
  function (response) {
    // Do something with response data
    // console.log(response)
    return response
  },
  function (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(error)
      console.error(Object.assign({}, error))
    }
    if (error.response) {
      if (error.response.status === 401) {
        (<any>Alpine.store('key')).reset() 
        console.error('Bad key')
      } else {
        console.error(error.response.data)
      }
    }
    return Promise.reject(error)
  }
)

export {
  client
}