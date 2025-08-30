import { assert, describe, it } from 'vitest'
import { odin } from '../src/index.js'

describe('🧪 Odin tests 🧪', () => {
  it('#1 should return true', () => {
    assert.isEmpty(odin({}, {}))
  })

  it('#2 should return true', () => {
    // @ts-expect-error
    assert.isObject(odin({}))
  })

  it('#3 should return true', () => {
    assert.deepEqual(odin({ a: 1, b: 2 }, { c: 3 }), { a: 1, b: 2, c: 3 })
  })
})
