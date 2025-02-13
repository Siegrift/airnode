import { Config } from '@api3/airnode-node';
import {
  createCloudProviderConfiguration,
  createNodeVersion,
  generateConfigFile,
  getAirnodeRrpAddress,
  getChainId,
} from '../config-utils';

const createConfig = async (generateExampleFile: boolean): Promise<Config> => ({
  chains: [
    {
      maxConcurrency: 100,
      authorizers: {
        requesterEndpointAuthorizers: [],
        crossChainRequesterAuthorizers: [],
      },
      authorizations: {
        requesterEndpointAuthorizations: {},
      },
      contracts: {
        AirnodeRrp: await getAirnodeRrpAddress(generateExampleFile),
      },
      id: await getChainId(generateExampleFile),
      providers: {
        exampleProvider: {
          url: '${PROVIDER_URL}',
        },
      },
      type: 'evm',
      options: {
        fulfillmentGasLimit: 500_000,
        gasPriceOracle: [
          {
            gasPriceStrategy: 'latestBlockPercentileGasPrice',
            percentile: 60,
            minTransactionCount: 20,
            pastToCompareInBlocks: 20,
            maxDeviationMultiplier: 2,
          },
          {
            gasPriceStrategy: 'providerRecommendedGasPrice',
            recommendedGasPriceMultiplier: 1.2,
          },
          {
            gasPriceStrategy: 'constantGasPrice',
            gasPrice: {
              value: 10,
              unit: 'gwei',
            },
          },
        ],
      },
    },
  ],
  nodeSettings: {
    cloudProvider: createCloudProviderConfiguration(generateExampleFile),
    airnodeWalletMnemonic: '${AIRNODE_WALLET_MNEMONIC}',
    heartbeat: {
      enabled: false,
    },
    httpGateway: {
      enabled: false,
    },
    httpSignedDataGateway: {
      enabled: false,
    },
    logFormat: 'plain',
    logLevel: 'INFO',
    nodeVersion: createNodeVersion(),
    stage: 'dev',
  },
  triggers: {
    rrp: [
      {
        endpointId: '0xea74a90bbc78b63658dcae04982d87de2710fe010b3bbb9ceb92cc8f724ea76b',
        oisTitle: 'Failure Example',
        endpointName: 'coinMarketData',
        cacheResponses: false,
      },
    ],
    http: [],
    httpSignedData: [],
  },
  templates: [],
  ois: [
    {
      oisFormat: '1.2.0',
      title: 'Failure Example',
      version: '1.0.0',
      apiSpecifications: {
        servers: [
          {
            url: 'https://thisurldoesntexist.abc',
          },
        ],
        paths: {
          '/coins/{id}': {
            get: {
              parameters: [
                {
                  in: 'path',
                  name: 'id',
                },
                {
                  in: 'query',
                  name: 'localization',
                },
                {
                  in: 'query',
                  name: 'tickers',
                },
                {
                  in: 'query',
                  name: 'market_data',
                },
                {
                  in: 'query',
                  name: 'community_data',
                },
                {
                  in: 'query',
                  name: 'developer_data',
                },
                {
                  in: 'query',
                  name: 'sparkline',
                },
              ],
            },
          },
        },
        components: {
          securitySchemes: {},
        },
        security: {},
      },
      endpoints: [
        {
          name: 'coinMarketData',
          operation: {
            method: 'get',
            path: '/coins/{id}',
          },
          fixedOperationParameters: [
            {
              operationParameter: {
                in: 'query',
                name: 'localization',
              },
              value: 'false',
            },
            {
              operationParameter: {
                in: 'query',
                name: 'tickers',
              },
              value: 'false',
            },
            {
              operationParameter: {
                in: 'query',
                name: 'market_data',
              },
              value: 'true',
            },
            {
              operationParameter: {
                in: 'query',
                name: 'community_data',
              },
              value: 'false',
            },
            {
              operationParameter: {
                in: 'query',
                name: 'developer_data',
              },
              value: 'false',
            },
            {
              operationParameter: {
                in: 'query',
                name: 'sparkline',
              },
              value: 'false',
            },
          ],
          reservedParameters: [
            {
              name: '_type',
              fixed: 'int256',
            },
            {
              name: '_path',
              fixed: 'market_data.current_price.usd',
            },
            {
              name: '_times',
              fixed: '1000000',
            },
          ],
          parameters: [
            {
              name: 'coinId',
              operationParameter: {
                in: 'path',
                name: 'id',
              },
            },
          ],
        },
      ],
    },
  ],
  apiCredentials: [],
});

const generateConfig = async (generateExampleFile = false) => {
  const config = await createConfig(generateExampleFile);
  generateConfigFile(__dirname, config, generateExampleFile);
};

export default generateConfig;
