const postcss = require('postcss')
const sparrow = require('postcss-sparrow')
const S = require('sanctuary')
const chai = require('chai')
const sinon = require('sinon')
const expect = chai.expect

describe('postcss-auto-text-indent', function () {
  let css

  beforeEach(function () {
    css = `
    body{
      padding: 5px;
    }

    a{
      letter-spacing: 20px;
    }`
  })

  describe('if letter-spacing is found', function () {
    it('text-indent with identical value should be appended', async function () {
      const options = {
        transformations: [
          {
            selectors: ['*'],
            inclusion: true,
            callback: [
              require('../src/index.js')
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

      console.log(result.root.nodes)
    })
  })
})
