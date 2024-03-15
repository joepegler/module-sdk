import { ERC20Token, Schedule } from '../scheduled-orders/types'

export type ScheduledTransaction = Schedule & {
  token: ERC20Token
  amount: number
  recipient: string
  maxGasPrice?: number
}
