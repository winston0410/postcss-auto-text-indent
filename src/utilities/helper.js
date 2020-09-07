// const S = require('sanctuary')
//
// const getProp = S.prop('prop')
//
// const eqlLetterSpacing = S.equals('letter-spacing')

const {
  prop,
  equals,
  pipe
} = require('ramda')

const getProp = prop('prop')

const eqlLetterSpacing = equals('letter-spacing')

const isLetterSpacing = pipe(
  getProp,
  eqlLetterSpacing
)

const getValue = prop('value')

const setTextIndent = (decl) => pipe(
  getValue,
  (value) => decl.before(`text-indent: ${value};`)
)(decl)

module.exports = {
  getValue,
  isLetterSpacing,
  setTextIndent
}
