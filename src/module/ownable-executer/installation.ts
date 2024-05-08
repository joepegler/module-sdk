import { Address, encodePacked } from 'viem'
import { Module } from '../types'
import { OWNABLE_EXECUTER_ADDRESS } from './constants'

export const getInstallOwnableExecuter = ({
  owner,
}: {
  owner: Address
}): Module => {
  return {
    module: OWNABLE_EXECUTER_ADDRESS,
    data: encodePacked(['address'], [owner]),
    additionalContext: '0x',
    type: 'executor',
  }
}
