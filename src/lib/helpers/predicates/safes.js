import and from 'crocks/logic/and'
import chain from 'crocks/pointfree/chain'
import compose from 'crocks/helpers/compose'
import curry from 'crocks/helpers/curry'
import isArray from 'crocks/predicates/isArray'
import isEmpty from 'crocks/predicates/isEmpty'
import isNil from 'crocks/predicates/isNil'
import isNumber from 'crocks/predicates/isNumber'
import isObject from 'crocks/predicates/isObject'
import isString from 'crocks/predicates/isString'
import not from 'crocks/logic/not'
import option from 'crocks/pointfree/option'
import prop from 'crocks/Maybe/prop'
import safe from 'crocks/Maybe/safe'

import gt from 'ramda/src/gt'
import gte from 'ramda/src/gte'
import lte from 'ramda/src/lte'
import length from 'ramda/src/length'

export const safeObject = safe(and(isObject, not(isEmpty)))
export const safeLength = safe(and(isArray, x => gt(length(x), 0)))
export const safeNumber = safe(and(Number.isFinite, isNumber))
export const safeString = safe(and(not(isEmpty), isString))

export const safeGte = curry(x => safe(and(safeNumber, lte(x))))
export const safeLte = curry(x => safe(and(safeNumber, gte(x))))

/**
 * Check if a number is inside its range
 *
 * @example safeRange(2, 0) // Nothing
 * @example safeRange(0, 2) // Maybe true
 *
 * @param {number} min the bottom for the range
 * @param {number} max the top for the range
 *
 * @return Safe
 */
export const safeRange = curry((min, max) =>
  safe(and(safeNumber, x => x >= min && x <= max))
)

export const emptyStringMaybe = safe(isString, '')

/**
 * Check if is array, if not, return one -`withOption`
 *
 * @param {*} val value any
 * @return {array} the `val` if was array or an empty array
 */
export const safeArray = compose(option([]), safeLength)

/**
 * Check for a prop children inside an object, if exists returns its content
 * if not returns an empty array -`withOption`
 * @param {object} val the object to check for the `children` prop
 *
 * @return {array} the prop `children` inside `val` if was array or an empty array
 */
export const safeChildren = compose(
  option([]),
  chain(safe(and(not(isNil), isArray))),
  prop('children')
)

/**
 * @returns {string} the value if present, empty string if not
 */
export const safeValue = compose(option(''), prop('value'))

/**
 * Check if a prop (passed as `key`) is a number inside an object -`withOption`
 * @param {*} key the key to check for its value
 * @param {object} obj the object to check the property
 *
 * @return {number} the prop if exists and is number, or `0` as default
 */
export const safeNumProp = curry(key =>
  compose(option(0), chain(safeNumber), prop(key))
)

/**
 * Check if the param passed is a finite number -`withOption`
 * @param {*} num the value to check if is a finite number
 * @return {number} the `num` if is a finite number or `0` as default
 */
export const safeInifity = compose(option(0), safeNumber)
