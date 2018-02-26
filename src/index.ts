import * as kebabCase from 'lodash.kebabcase'
import { ICssProperties, ICssRulesets } from './types'

const propertiesToString = ( properties: ICssProperties ) =>
  Object.keys( properties ).map( propertyName =>
    `${ kebabCase( propertyName ) }:${ properties[ propertyName ] }`
  ).join( ';' )

const CssString = ( styles: ICssRulesets ) =>
  Object.keys( styles ).map( selector =>
     `${ selector }{${ propertiesToString( styles[ selector ] ) }}`
  ).join( '' )

export = CssString
