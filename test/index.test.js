const chai = require('chai').assert
const { odin } = require('../src/index.js')

describe('🧪 Odin tests 🧪', () => {
  it('#1 should return true', () => {
    chai.isEmpty(odin({}, {}))
  })

  it('#2 should return true', () => {
    // @ts-ignore
    chai.isObject(odin({}))
  })

  it('#3 should return true', () => {
    // @ts-ignore
    chai.isNull(odin())
  })

  it('#4 should return true', () => {
    chai.deepEqual(odin({ a: 1, b: 2 }, { c: 3 }), { a: 1, b: 2, c: 3 })
  })
})
