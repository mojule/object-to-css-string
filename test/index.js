'use strict'

const assert = require( 'assert' )
const CssString = require( '..' )

const simpleStyle = {
  '.foo .bar': {
    textSize: '1rem',
    margin: 0
  }
}

const complexStyle = {
  '@import url( "other.css" )': null,
  '.foo .bar': {
    textSize: '1rem',
    margin: 0
  },
  '@supports (display: flex)': {
    '@media screen and (min-width: 900px)': {
      '.foo .bar': {
        textSize: '1.25rem',
        margin: 0
      }
    }
  }
}

const badStyle = {
  '.foo .bar': 10
}

describe( 'object-to-css-string', () => {
  it( 'simple style', () => {
    assert.strictEqual( CssString( simpleStyle ), '.foo .bar{text-size:1rem;margin:0}' )
  })

  it( 'complex style', () => {
    const expect = '@import url( "other.css" );.foo .bar{text-size:1rem;margin:0}@supports (display: flex){@media screen and (min-width: 900px){.foo .bar{text-size:1.25rem;margin:0}}}'

    assert.strictEqual( CssString( complexStyle ), expect )
  })

  it( 'bad style', () => {
    assert.throws( () => CssString( badStyle ) )
  })
})