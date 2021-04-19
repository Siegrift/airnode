const AirnodeArtifact = require('./artifacts/contracts/Airnode.sol/Airnode.json');
const ConvenienceArtifact = require('./artifacts/contracts/Convenience.sol/Convenience.json');
const MockAirnodeClientArtifact = require('./artifacts/contracts/mock/MockAirnodeClient.sol/MockAirnodeClient.json');

const AirnodeRopsten = require('./deployments/ropsten/Airnode.json');
const ConvenienceRopsten = require('./deployments/ropsten/Convenience.json');

const AirnodeRinkeby = require('./deployments/rinkeby/Airnode.json');
const ConvenienceRinkeby = require('./deployments/rinkeby/Convenience.json');

const AirnodeGoerli = require('./deployments/goerli/Airnode.json');
const ConvenienceGoerli = require('./deployments/goerli/Convenience.json');

const AirnodeXdai = require('./deployments/xdai/Airnode.json');
const ConvenienceXdai = require('./deployments/xdai/Convenience.json');

const AirnodeFantom = require('./deployments/fantom/Airnode.json');
const ConvenienceFantom = require('./deployments/fantom/Convenience.json');

const AirnodeAddresses = {
  3: AirnodeRopsten.receipt.contractAddress,
  4: AirnodeRinkeby.receipt.contractAddress,
  5: AirnodeGoerli.receipt.contractAddress,
  100: AirnodeXdai.receipt.contractAddress,
  250: AirnodeFantom.receipt.contractAddress,
  // The address of the Airnode contract (must be the same as in config.json)
  80: '0x4DFBfB60176d164D42E8e6463af587B2F1175cAB',
};
const ConvenienceAddresses = {
  3: ConvenienceRopsten.receipt.contractAddress,
  4: ConvenienceRinkeby.receipt.contractAddress,
  5: ConvenienceGoerli.receipt.contractAddress,
  100: ConvenienceXdai.receipt.contractAddress,
  250: ConvenienceFantom.receipt.contractAddress,
  // The address of the Convenience contract (must be the same as in config.json)
  80: '0x73e7c91901d94F0bC1139429A66256411ACfcfBB',
};

module.exports = {
  AirnodeArtifact,
  ConvenienceArtifact,
  AirnodeAddresses,
  ConvenienceAddresses,
  mocks: {
    MockAirnodeClient: MockAirnodeClientArtifact,
  },
  // TODO
  authorizers: {},
};
