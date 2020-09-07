// const S = require('sanctuary')
//
// const getProp = S.prop('prop')
//
// const eqlLetterSpacing = S.equals('letter-spacing')

const R = require('ramda')

const getProp = R.prop('prop')

const eqlLetterSpacing = R.equals('letter-spacing')

const isLetterSpacing = R.pipe(
  getProp,
  eqlLetterSpacing
)

const getValue = R.prop('value')

const setTextIndent = (decl) => R.pipe(
  getValue,
  (value) => decl.before(`text-indent: ${value};`)
)(decl)

module.exports = {
  getValue,
  isLetterSpacing,
  setTextIndent
}
