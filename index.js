module.exports = {
  objectToArray: obj => {
    let tmp = []
    for (let k in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(k)) {
        tmp.push({
          key: k,
          val: obj[k]
        })
      }
    }
    return tmp
  },
  jsonToQueryString: json => {
    return '?'
      + Object.keys(json)
        .map(key =>
          encodeURIComponent(key) + '='
          + encodeURIComponent(json[key])).join('&')
  },
  textCrop: (str, size, dash = true) => {
    return str.length >= size ? str.substring(0, size) + (dash ? '...' : '') : str
  },
  isEmptyObject: obj => {
    return obj && Object.keys(obj).length === 0
  }
}