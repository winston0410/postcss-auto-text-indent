// const S = require('sanctuary')
const {
  when
} = require('ramda')

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

  return when(
    isLetterSpacing,
    setTextIndent
  )(decl)
}
