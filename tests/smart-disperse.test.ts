import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ERC20TokenDispersed } from "../generated/schema"
import { ERC20TokenDispersed as ERC20TokenDispersedEvent } from "../generated/SmartDisperse/SmartDisperse"
import { handleERC20TokenDispersed } from "../src/smart-disperse"
import { createERC20TokenDispersedEvent } from "./smart-disperse-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _token = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _recipients = [
      Address.fromString("0x0000000000000000000000000000000000000001")
    ]
    let _values = [BigInt.fromI32(234)]
    let newERC20TokenDispersedEvent = createERC20TokenDispersedEvent(
      _token,
      _recipients,
      _values
    )
    handleERC20TokenDispersed(newERC20TokenDispersedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ERC20TokenDispersed created and stored", () => {
    assert.entityCount("ERC20TokenDispersed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ERC20TokenDispersed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_token",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ERC20TokenDispersed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_recipients",
      "[0x0000000000000000000000000000000000000001]"
    )
    assert.fieldEquals(
      "ERC20TokenDispersed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_values",
      "[234]"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
