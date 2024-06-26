// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class ERC20TokenDispersed extends ethereum.Event {
  get params(): ERC20TokenDispersed__Params {
    return new ERC20TokenDispersed__Params(this);
  }
}

export class ERC20TokenDispersed__Params {
  _event: ERC20TokenDispersed;

  constructor(event: ERC20TokenDispersed) {
    this._event = event;
  }

  get _token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _recipients(): Array<Address> {
    return this._event.parameters[1].value.toAddressArray();
  }

  get _values(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }
}

export class EtherDispersed extends ethereum.Event {
  get params(): EtherDispersed__Params {
    return new EtherDispersed__Params(this);
  }
}

export class EtherDispersed__Params {
  _event: EtherDispersed;

  constructor(event: EtherDispersed) {
    this._event = event;
  }

  get _recipients(): Array<Address> {
    return this._event.parameters[0].value.toAddressArray();
  }

  get _values(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SmartDisperse extends ethereum.SmartContract {
  static bind(address: Address): SmartDisperse {
    return new SmartDisperse("SmartDisperse", address);
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DisperseEtherCall extends ethereum.Call {
  get inputs(): DisperseEtherCall__Inputs {
    return new DisperseEtherCall__Inputs(this);
  }

  get outputs(): DisperseEtherCall__Outputs {
    return new DisperseEtherCall__Outputs(this);
  }
}

export class DisperseEtherCall__Inputs {
  _call: DisperseEtherCall;

  constructor(call: DisperseEtherCall) {
    this._call = call;
  }

  get _recipients(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _values(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class DisperseEtherCall__Outputs {
  _call: DisperseEtherCall;

  constructor(call: DisperseEtherCall) {
    this._call = call;
  }
}

export class DisperseTokenCall extends ethereum.Call {
  get inputs(): DisperseTokenCall__Inputs {
    return new DisperseTokenCall__Inputs(this);
  }

  get outputs(): DisperseTokenCall__Outputs {
    return new DisperseTokenCall__Outputs(this);
  }
}

export class DisperseTokenCall__Inputs {
  _call: DisperseTokenCall;

  constructor(call: DisperseTokenCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _recipients(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _values(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class DisperseTokenCall__Outputs {
  _call: DisperseTokenCall;

  constructor(call: DisperseTokenCall) {
    this._call = call;
  }
}

export class DisperseTokenSimpleCall extends ethereum.Call {
  get inputs(): DisperseTokenSimpleCall__Inputs {
    return new DisperseTokenSimpleCall__Inputs(this);
  }

  get outputs(): DisperseTokenSimpleCall__Outputs {
    return new DisperseTokenSimpleCall__Outputs(this);
  }
}

export class DisperseTokenSimpleCall__Inputs {
  _call: DisperseTokenSimpleCall;

  constructor(call: DisperseTokenSimpleCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _recipients(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _values(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class DisperseTokenSimpleCall__Outputs {
  _call: DisperseTokenSimpleCall;

  constructor(call: DisperseTokenSimpleCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawERC20TokensCall extends ethereum.Call {
  get inputs(): WithdrawERC20TokensCall__Inputs {
    return new WithdrawERC20TokensCall__Inputs(this);
  }

  get outputs(): WithdrawERC20TokensCall__Outputs {
    return new WithdrawERC20TokensCall__Outputs(this);
  }
}

export class WithdrawERC20TokensCall__Inputs {
  _call: WithdrawERC20TokensCall;

  constructor(call: WithdrawERC20TokensCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawERC20TokensCall__Outputs {
  _call: WithdrawERC20TokensCall;

  constructor(call: WithdrawERC20TokensCall) {
    this._call = call;
  }
}
