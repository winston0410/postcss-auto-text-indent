// const S = require('sanctuary')
const R = require('ramda')

const {
  isLetterSpacing,
  setTextIndent
} = require('./utilities/helper.js')

module.exports = (decl) => {
  // return S.when(
  //   S.pipe([
  //     getProp,
  //     eqlLetterSpacing
  //   ])
  // )((x) => {
  //   console.log('This is a matching decl')
  //   return x
  // })(decl)

  return R.when(
    isLetterSpacing,
    setTextIndent
  )(decl)
}
