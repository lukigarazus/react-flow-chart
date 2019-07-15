import { IChart } from './chart'
import { IOnLinkCompleteInput } from './functions'

export interface IConfig {
  snapToGrid?: boolean
  validateLink?: (props: IOnLinkCompleteInput & { chart: IChart }) => boolean
  nodeProps?: any
}