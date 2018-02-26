'use strict'

const assert = require( 'assert' )
const CssString = require( '..' )

describe( 'object-to-css-string', () => {
  it( 'stringifies', () => {
    const style = {
      '.foo .bar': {
        textSize: '1rem',
        margin: 0
      }
    }

    assert.strictEqual( CssString( style ), '.foo .bar{text-size:1rem;margin:0}' )
  })
})