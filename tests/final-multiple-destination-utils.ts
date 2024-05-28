import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  ERC20TokenDispersed,
  MessageReceived,
  MessageSent,
  OwnershipTransferRequested,
  OwnershipTransferred
} from "../generated/FinalMultipleDestination/FinalMultipleDestination"

export function createERC20TokenDispersedEvent(
  sender: Address,
  token: Address,
  recipients: Array<Address>,
  amounts: Array<BigInt>
): ERC20TokenDispersed {
  let erc20TokenDispersedEvent = changetype<ERC20TokenDispersed>(newMockEvent())

  erc20TokenDispersedEvent.parameters = new Array()

  erc20TokenDispersedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  erc20TokenDispersedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  erc20TokenDispersedEvent.parameters.push(
    new ethereum.EventParam(
      "recipients",
      ethereum.Value.fromAddressArray(recipients)
    )
  )
  erc20TokenDispersedEvent.parameters.push(
    new ethereum.EventParam(
      "amounts",
      ethereum.Value.fromUnsignedBigIntArray(amounts)
    )
  )

  return erc20TokenDispersedEvent
}

export function createMessageReceivedEvent(
  messageId: Bytes,
  sourceChainSelector: BigInt,
  sender: Address,
  _paymentData: Bytes,
  token: Address,
  tokenAmount: BigInt
): MessageReceived {
  let messageReceivedEvent = changetype<MessageReceived>(newMockEvent())

  messageReceivedEvent.parameters = new Array()

  messageReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "messageId",
      ethereum.Value.fromFixedBytes(messageId)
    )
  )
  messageReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "sourceChainSelector",
      ethereum.Value.fromUnsignedBigInt(sourceChainSelector)
    )
  )
  messageReceivedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  messageReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "_paymentData",
      ethereum.Value.fromBytes(_paymentData)
    )
  )
  messageReceivedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  messageReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAmount",
      ethereum.Value.fromUnsignedBigInt(tokenAmount)
    )
  )

  return messageReceivedEvent
}

export function createMessageSentEvent(
  msgSender: Address,
  messageId: Bytes,
  destinationChainSelector: BigInt,
  receiver: Address,
  _paymentData: ethereum.Tuple,
  token: Address,
  tokenAmount: BigInt,
  feeToken: Address,
  fees: BigInt
): MessageSent {
  let messageSentEvent = changetype<MessageSent>(newMockEvent())

  messageSentEvent.parameters = new Array()

  messageSentEvent.parameters.push(
    new ethereum.EventParam("msgSender", ethereum.Value.fromAddress(msgSender))
  )
  messageSentEvent.parameters.push(
    new ethereum.EventParam(
      "messageId",
      ethereum.Value.fromFixedBytes(messageId)
    )
  )
  messageSentEvent.parameters.push(
    new ethereum.EventParam(
      "destinationChainSelector",
      ethereum.Value.fromUnsignedBigInt(destinationChainSelector)
    )
  )
  messageSentEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  messageSentEvent.parameters.push(
    new ethereum.EventParam(
      "_paymentData",
      ethereum.Value.fromTuple(_paymentData)
    )
  )
  messageSentEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  messageSentEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAmount",
      ethereum.Value.fromUnsignedBigInt(tokenAmount)
    )
  )
  messageSentEvent.parameters.push(
    new ethereum.EventParam("feeToken", ethereum.Value.fromAddress(feeToken))
  )
  messageSentEvent.parameters.push(
    new ethereum.EventParam("fees", ethereum.Value.fromUnsignedBigInt(fees))
  )

  return messageSentEvent
}

export function createOwnershipTransferRequestedEvent(
  from: Address,
  to: Address
): OwnershipTransferRequested {
  let ownershipTransferRequestedEvent = changetype<OwnershipTransferRequested>(
    newMockEvent()
  )

  ownershipTransferRequestedEvent.parameters = new Array()

  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferRequestedEvent
}

export function createOwnershipTransferredEvent(
  from: Address,
  to: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferredEvent
}
