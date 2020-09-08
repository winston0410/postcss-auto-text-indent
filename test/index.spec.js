const postcss = require('postcss')
const sparrow = require('postcss-sparrow')
// const S = require('sanctuary')
const R = require('ramda')
const chai = require('chai')
const sinon = require('sinon')
const expect = chai.expect

const getDeclCount = R.reduce(
  (acc, value) => R.pipe(
    R.prop('nodes'),
    R.prop('length'),
    R.add(acc)
  )(value)
)(0)

describe('postcss-auto-text-indent', function () {
  let css, beforeDeclCount

  beforeEach(function () {
    css = `
    body{
      padding: 5px;
    }

    a{
      letter-spacing: 20px;
    }`

    const beforeTransformation = postcss
      .parse(css, {
        from: undefined
      })

    beforeDeclCount = getDeclCount(beforeTransformation.nodes)
  })

  describe('if letter-spacing is found', function () {
    it('text-indent with identical value should be appended', async function () {
      const options = {
        transformations: [
          {
            selectors: ['*'],
            inclusion: true,
            callback: [
              require('../dist/index.cjs.js')
            ]
          }
        ]
      }

      const result = await postcss([
        sparrow(options)
      ])
        .process(css, {
          from: undefined
        })

      const declCount = getDeclCount(result.root.nodes)

      expect(declCount).to.equal(3)
      expect(declCount).to.be.greaterThan(beforeDeclCount)
    })
  })
  //
  // describe('if letter-spacing is not found', function () {
  //   it('text-indent should not be appended', function () {
  //
  //   })
  // })
})
