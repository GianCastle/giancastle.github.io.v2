import curry from 'crocks/helpers/curry'
import keys from 'ramda/src/keys'
import reduce from 'ramda/src/reduce'

/**
 * This function takes a map with the new structure mirored {oldK: newK}
 * and then takes the object to swap the keys and return it
 *
 * i.e:: {prevK: newK} => {prevK: 'test'} => {newK: 'test'}
 * @param {array} arrayParam
 * @returns {(newKeys: object, obj: object) => object}
 */
export const swapkeys = curry((newKeys, obj) =>
  reduce(
    (newObj, k) => ({
      ...newObj,
      [newKeys[k]]: obj[k]
    }),
    {},
    keys(newKeys)
  )
)
