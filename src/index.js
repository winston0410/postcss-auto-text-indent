// const S = require('sanctuary')
import * as R from 'ramda'

import {
  isLetterSpacing,
  setTextIndent
} from './utilities/helper.js'

export default (decl) => {
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
