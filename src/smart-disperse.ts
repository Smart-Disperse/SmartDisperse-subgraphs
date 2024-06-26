import {
  ERC20TokenDispersed as ERC20TokenDispersedEvent,
  EtherDispersed as EtherDispersedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/SmartDisperse/SmartDisperse";
import {
  ERC20TokenDispersed,
  EtherDispersed,
  OwnershipTransferred,
} from "../generated/schema";
import { BigInt, Bytes } from "@graphprotocol/graph-ts";
export function handleERC20TokenDispersed(
  event: ERC20TokenDispersedEvent
): void {
  let entity = new ERC20TokenDispersed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity._token = event.params._token;
  // entity._recipients = event.params._recipients
  entity._recipients = changetype<Bytes[]>(event.params._recipients);
  entity._values = changetype<BigInt[]>(event.params._values);

  // entity._values = event.params._values

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleEtherDispersed(event: EtherDispersedEvent): void {
  let entity = new EtherDispersed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  // entity._recipients = event.params._recipients;
  // entity._values = event.params._values;
  entity._recipients = changetype<Bytes[]>(event.params._recipients);
  entity._values = changetype<BigInt[]>(event.params._values);

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
