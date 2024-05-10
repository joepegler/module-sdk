import { getInstallScheduledTransfersExecutor } from 'src/module'
import { SCHEDULED_TRANSFERS_EXECUTER_ADDRESS } from 'src/module'
import { getCreateScheduledTransferExecution } from 'src/module'
import { ERC20Token } from 'src/module/scheduled-orders/types'

describe('ScheduledTransfers Module', () => {
  // Setup
  const token: ERC20Token = {
    token_address: '0x0Cb7EAb54EB751579a82D80Fe2683687deb918f3',
    decimals: 18,
  }

  it('should get install scheduled transfers module', async () => {
    const installScheduledTransfersModule =
      getInstallScheduledTransfersExecutor({
        numberOfExecutions: 1,
        executeInterval: 10,
        startDate: new Date().getTime(),
        executionData: '0x',
      })

    expect(installScheduledTransfersModule.module).toEqual(
      SCHEDULED_TRANSFERS_EXECUTER_ADDRESS,
    )
    expect(installScheduledTransfersModule.data).toBeDefined()
    expect(installScheduledTransfersModule.type).toEqual('executor')
  })

  it('Should get createScheduledTransferExecution action', async () => {
    const createScheduledTransferExecution =
      getCreateScheduledTransferExecution({
        scheduledTransaction: {
          token,
          amount: 100,
          recipient: '0x0Cb7EAb54EB751579a82D80Fe2683687deb918f3',
          startDate: new Date().getTime(),
          repeatEvery: 10,
          numberOfRepeats: 1,
        },
      })

    expect(createScheduledTransferExecution.target).toEqual(
      SCHEDULED_TRANSFERS_EXECUTER_ADDRESS,
    )
    expect(createScheduledTransferExecution.value).toEqual(BigInt(0))
    expect(createScheduledTransferExecution.callData).toBeDefined()
  })
})
