import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import eb from '@/utils/event-bus'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    eb.eventBus.$emit('loadingon')

    if (store.getters.token) {
      // let each request carry token
      // please modify it according to the actual situation
      config.headers.authorization = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    eb.eventBus.$emit('loadingoff')
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    eb.eventBus.$emit('loadingoff')
    const statusCode = response.status
    const res = response.data

    var newJwt = response.headers.authorization
    if (newJwt) {
      store.dispatch('user/refreshToken', newJwt)
    }

    console.log('response', response)

    // if the custom code is not 20000, it is judged as an error.
    if (statusCode !== 200) {
      Message({
        message: res.error || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm(
          'You have been logged out, you can cancel to stay on this page, or log in again',
          'Confirm logout',
          {
            confirmButtonText: 'Re-Login',
            cancelButtonText: 'Cancel',
            type: 'warning'
          }
        ).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    eb.eventBus.$emit('loadingoff')
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

export const GET = (url, params) => fetch(url, params, 'get')

export const POST = (url, data) => fetch(url, data, 'post')

export const PUT = (url, data) => fetch(url, data, 'put')

export const DELETE = (url, data) => fetch(url, data, 'delete')

export const fetch = (url, data = null, method = 'get') => {
  const params = method === 'get' || method === 'GET' ? data : null
  return service({
    url,
    data,
    params,
    method
  })
}
