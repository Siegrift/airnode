/**
 * This package is integrated with https://github.com/ethereum-ts/TypeChain which generates TS
 * bindings and wrappers for ethers wallet (version 5). TypeChain generates two important pieces for
 * each solidity contract:
 *  1) Factories - (e.g. AirnodeRrpV0Factory) are used to connect to ethers Signer and deploy the
 *     contract (or just connect to an already deployed contract instance). You will get a strongly
 *     typed contract instance in return.
 *  2) Typed contracts - These are returned after deployed via contract Factory. It allows you to
 *     call functions, mapping and transactions in type safe manner.
 *
 * The generated code "value exports" the factories, but "type exports" the contracts.
 */
import {
  MockRrpRequesterV0__factory as MockRrpRequesterFactory,
  AirnodeRrpV0__factory as AirnodeRrpV0Factory,
  AccessControlRegistry__factory as AccessControlRegistryFactory,
  RequesterAuthorizerWithAirnodeV0__factory as RequesterAuthorizerWithAirnodeV0Factory,
  RrpBeaconServerV0__factory as RrpBeaconServerFactory,
} from './contracts';
import references from '../deployments/references.json';

const AirnodeRrpAddresses: { [chainId: number]: string } = references.AirnodeRrp;
const AccessControlRegistryAddresses: { [chainId: number]: string } = references.AccessControlRegistry;
const RequesterAuthorizerWithAirnodeAddresses: { [chainId: number]: string } =
  references.RequesterAuthorizerWithAirnode;

const mocks = {
  MockRrpRequesterFactory,
};
const authorizers = {
  RequesterAuthorizerWithAirnodeV0Factory,
};

export {
  AirnodeRrpAddresses,
  AccessControlRegistryAddresses,
  RequesterAuthorizerWithAirnodeAddresses,
  AirnodeRrpV0Factory,
  AccessControlRegistryFactory,
  RrpBeaconServerFactory,
  mocks,
  authorizers,
};

export type {
  AirnodeRrpV0,
  MockRrpRequesterV0,
  AccessControlRegistry,
  RequesterAuthorizerWithAirnodeV0,
  RrpBeaconServerV0,
} from './contracts';
export {
  MadeTemplateRequestEvent,
  MadeFullRequestEvent,
  FulfilledRequestEvent,
  FailedRequestEvent,
  RequestedWithdrawalEvent,
  FulfilledWithdrawalEvent,
} from './contracts/AirnodeRrp';
export { TypedEventFilter } from './contracts/commons';
