/**
 * Assigns all properties of the source object to the target object.
 *
 * NOTE: this function uses the method of shallow copying of the source object, for deep/true copied objects consider using [clone.js](https://github.com/igorskyflyer/npm-clone-js).
 * @param {object} target The target object to copy properties to.
 * @param {object} source The source object to copy properties from.
 * @returns {object} Returns the target object.
 *
 * If the **_target_** object is not provided and empty object is returned.
 *
 * If the **_source_** object is not provided the **_target_** object is returned unchanged.
 */
function odin(target, source) {
  if (typeof target !== 'object') {
    return {}
  }

  if (typeof source !== 'object') {
    return target
  }

  return Object.assign(target, source)
}

module.exports = { odin }
