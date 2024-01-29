import { Address, Hex } from 'viem'
import { Account, AccountType } from '../Account'

export const createAccount = ({
  address,
  initCode,
  type,
  deployedOnChains = [],
}: {
  address: Address
  initCode: Hex
  type: AccountType
  deployedOnChains?: Number[]
}): Account => {
  return {
    address,
    initCode,
    type,
    deployedOnChains,
  }
}
