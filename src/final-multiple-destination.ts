import {
  ERC20TokenDispersed as ERC20TokenDispersedEvent,
  MessageReceived as MessageReceivedEvent,
  MessageSent as MessageSentEvent,
  OwnershipTransferRequested as OwnershipTransferRequestedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/FinalMultipleDestination/FinalMultipleDestination"
import {
  ERC20TokenDispersed,
  MessageReceived,
  MessageSent,
  OwnershipTransferRequested,
  OwnershipTransferred
} from "../generated/schema"
import {BigInt, Bytes} from "@graphprotocol/graph-ts"

export function handleERC20TokenDispersed(
  event: ERC20TokenDispersedEvent
): void {
  let entity = new ERC20TokenDispersed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.token = event.params.token
  entity.recipients = changetype<Bytes[]>(event.params.recipients)
  entity.amounts = changetype<BigInt[]>(event.params.amounts)
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMessageReceived(event: MessageReceivedEvent): void {
  let entity = new MessageReceived(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.messageId = event.params.messageId
  entity.sourceChainSelector = event.params.sourceChainSelector
  entity.sender = event.params.sender
  entity._paymentData = event.params._paymentData
  entity.token = event.params.token
  entity.tokenAmount = event.params.tokenAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMessageSent(event: MessageSentEvent): void {
  let entity = new MessageSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.msgSender = event.params.msgSender
  entity.messageId = event.params.messageId
  entity.destinationChainSelector = event.params.destinationChainSelector
  entity.receiver = event.params.receiver
  entity._paymentData_paymentReceivers = changetype<Bytes[]>(event.params._paymentData.paymentReceivers)
  entity._paymentData_amounts = changetype<BigInt[]>(event.params._paymentData.amounts)
  entity.token = event.params.token
  entity.tokenAmount = event.params.tokenAmount
  entity.feeToken = event.params.feeToken
  entity.fees = event.params.fees

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferRequested(
  event: OwnershipTransferRequestedEvent
): void {
  let entity = new OwnershipTransferRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
