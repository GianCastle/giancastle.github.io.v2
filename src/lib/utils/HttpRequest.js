import Async from 'crocks/Async'
import propPathOr from 'crocks/helpers/propPathOr'
import curry from 'crocks/helpers/curry'

export const pathOrEmptyString = propPathOr('')

/**
 * @func getRendererFrom
 * @param {Object} obj object to search
 * @param {string} prop the criteria
 *
 * @returns {string | Object} the object inside the rendered property or empty string
 *
 */
export const getRendererFrom = curry((obj, prop) =>
  pathOrEmptyString([prop, 'rendered'], obj)
)

/**
 * @func createHeaders
 * @param {...String} props any string arguments
 *
 * @returns {Object} header + rest
 *
 * @example createHeaders({test: 'foo'},)
 * //​​​​​{ test: 'foo' }​​​​​
 *
 */
export const createHeaders = props => ({ ...props })

/**
 * @func createAPIURL
 * @description Takes API ROOT URL constant and url parameter and concat into one string
 * @param {String} route construct a URL based on API_URL constant and param URL
 *
 * @example createAPIURL('test') // 'https://theroute.com/v1/test'
 * @returns {String} url the API URL
 */
const createAPIURL = route => `${process.env.REACT_APP_API_ROOT_URL}${route}`

/**
 *
 * @param {HttpResponse} res the response of the URL
 * @description Check if the response is succes or failure
 * @returns {Object<JSON> | String} the response object or a reject string
 */
const isOk = res => (res.ok ? res.json() : Promise.reject(res.statusText))

const asyncGetJSON = Async.fromPromise(isOk)

/**
 * @func fetchAsync
 * @param {String} url the URL from wich we gonna make a request
 * @param {Object} restHeaders request Headers
 * @returns {Async} the response
 */
export const fetchAsync = (url, restHeaders) =>
  Async.fromPromise(fetch)(createAPIURL(url), {
    headers: createHeaders(restHeaders)
  }).chain(asyncGetJSON)
