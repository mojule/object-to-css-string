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
```
