import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ERC20TokenDispersed,
  EtherDispersed,
  OwnershipTransferred
} from "../generated/SmartDisperse/SmartDisperse"

export function createERC20TokenDispersedEvent(
  _token: Address,
  _recipients: Array<Address>,
  _values: Array<BigInt>
): ERC20TokenDispersed {
  let erc20TokenDispersedEvent = changetype<ERC20TokenDispersed>(newMockEvent())

  erc20TokenDispersedEvent.parameters = new Array()

  erc20TokenDispersedEvent.parameters.push(
    new ethereum.EventParam("_token", ethereum.Value.fromAddress(_token))
  )
  erc20TokenDispersedEvent.parameters.push(
    new ethereum.EventParam(
      "_recipients",
      ethereum.Value.fromAddressArray(_recipients)
    )
  )
  erc20TokenDispersedEvent.parameters.push(
    new ethereum.EventParam(
      "_values",
      ethereum.Value.fromUnsignedBigIntArray(_values)
    )
  )

  return erc20TokenDispersedEvent
}

export function createEtherDispersedEvent(
  _recipients: Array<Address>,
  _values: Array<BigInt>
): EtherDispersed {
  let etherDispersedEvent = changetype<EtherDispersed>(newMockEvent())

  etherDispersedEvent.parameters = new Array()

  etherDispersedEvent.parameters.push(
    new ethereum.EventParam(
      "_recipients",
      ethereum.Value.fromAddressArray(_recipients)
    )
  )
  etherDispersedEvent.parameters.push(
    new ethereum.EventParam(
      "_values",
      ethereum.Value.fromUnsignedBigIntArray(_values)
    )
  )

  return etherDispersedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
