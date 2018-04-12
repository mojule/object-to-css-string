import * as kebabCase from 'lodash.kebabcase'
import { is } from '@mojule/is'
import { CssObject } from './types';

const declarationsToString = declarations =>
  Object.keys( declarations ).map( propertyName =>
    `${ kebabCase( propertyName ) }:${ declarations[ propertyName ] }`
  ).join( ';' )

const CssString = ( styles: CssObject ) => {
  let css = ''

  Object.keys( styles ).forEach( name => {
    const value = styles[ name ]

    if( name.startsWith( '@' ) && !value ){
      css += `${ name };`
      return
    }

    if( name.startsWith( '@' ) && is.object( value ) ){
      css += `${ name }{${ CssString( <CssObject>value ) }}`
      return
    }

    if( !is.object( value ) ) throw Error( 'Expected an @ statement, nested @ rule or CSS declaration block' )

    css += `${ name }{${ declarationsToString( value ) }}`
  })

  return css
}

export = CssString
