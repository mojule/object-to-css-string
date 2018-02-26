export interface ICssProperties {
  [ property: string ]: string | number
}

export interface ICssRulesets {
  [ selector: string ]: ICssProperties
}