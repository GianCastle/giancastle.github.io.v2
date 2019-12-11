import { fetchAsync } from '../../utils/HttpRequest'

/**
 * @func get
 * @description Fetch an external resource via (GET)
 * @param {String} route
 * @param {Object} headers
 * @param {String} queryString
 * @returns {Async :: ((e -> (), a -> ()) -> ()) -> Async e a}
 */

const contentType = { 'Content-Type': 'application/json' }
const get = (route, headers, queryString = '') =>
  fetchAsync(`${route}${queryString}`, {
    contentType,
    ...headers
  })

/**
 * @func post
 * @description send a resource via (POST)
 * @param {String} route
 * @param {Object} headers
 * @param {String} queryString
 * @returns {Async :: ((e -> (), a -> ()) -> ()) -> Async e a}
 */
const post = (route, headers, queryString) =>
  fetchAsync(`${route}${queryString}`, {
    ...headers,
    contentType,
    method: 'POST'
  })

export default {
  get,
  post
}
