// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

interface IAirnodeStablecoinPayment {
    event SetAirnodeFeeRegistry(
        address airnodeFeeRegistry,
        address registrySetter
    );

    event SetRequesterAuthorizerWithManager(
        uint256 chainId,
        address requesterAuthorizerWithManager,
        address requesterAuthorizerWithManagerSetter
    );

    event SetAirnodePaymentAddress(address airnode, address paymentAddress);

    event MadePayment(
        uint256 chainId,
        address indexed airnode,
        bytes32 indexed endpointId,
        address indexed requesterAddress,
        address sponsor,
        address paymentAddress,
        uint256 paymentAmount,
        uint64 expirationTimestamp
    );

    function setAirnodeFeeRegistry(address airnodeFeeRegistry) external;

    function setRequesterAuthorizerWithManager(
        uint256 chainId,
        address requesterAuthorizerWithManager
    ) external;

    function setAirnodePaymentAddress(address airnode, address paymentAddress)
        external;

    function makePayment(
        address stablecoin,
        uint256 chainId,
        address airnode,
        bytes32 endpointId,
        address requesterAddress,
        uint64 timeInDays
    ) external;

    function getPaymentAmount(
        address stablecoin,
        uint256 chainId,
        address airnode,
        bytes32 endpointId,
        uint64 timeInDays
    ) external view returns (uint256 paymentAmount);
}
