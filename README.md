# object-to-css-string

`npm install @mojule/object-to-css-string`

```javascript
const CssString = require( '@mojule/object-to-css-string' )

const style = {
  '.foo .bar': {
    fontSize: '10pt',
    margin: 0
  }
}

console.log( CssString( style ) )

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

console.log( CssString( complexStyle ) )
```
