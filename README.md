# 🏃 Chain Educator

Chain Educator is designed as a beginner's guide to working with Chainlink. This extension includes example smart contracts and frontend components, making deployment on Fleek simple and stress-free. It serves as a foundation for building your Chainlink-based dApps or projects. The extension covers the following Chainlink features:

- CCIP:
  - Transfer tokens across chains using Chainlink CCIP
  - Send and receive cross-chain messages
  - Mint NFTs on a destination chain via cross-chain requests
- Data Feeds
- VRF

## Table of Contents

- [Getting Started](#getting-started)
- [🔄 Token Transfers](#-token-transfers)
- [✉️ Cross-Chain Messaging](#-cross-chain-messaging)
- [🖼️ Cross-Chain NFT Minting](#-cross-chain-nft-minting)
- [🎲 VRF (Verifiable Random Function)](#-vrf-verifiable-random-function)
- [Links](#links)
- [Team](#team)

## Getting Started

Check out the [Chainlink Extension repo](https://github.com/arjanjohan/scaffold-chainlink-extension) and follow the installation instructions.

## 🔄 Token Transfers

Chainlink CCIP allows you to transfer tokens across different blockchains securely. The `TokenSender.sol` and `TokenTransfer.sol` contracts manage the process of sending tokens from one blockchain to another.

### Frontend Interaction

- **Send Tokens:** Use the frontend interface to initiate a token transfer from the source blockchain to the destination blockchain. The frontend will handle the transaction and display the status.

- **Monitor Transfer:** Once the transfer is initiated, you can monitor its progress and confirm receipt on the destination blockchain.

### Details

- Ensure both contracts are deployed on the respective chains.
- You can choose to pay fees using native tokens (e.g., ETH) or LINK tokens.

### Links

[Chainlink Docs: Cross-chain tokens](https://docs.chain.link/ccip/tutorials/cross-chain-tokens)

## ✉️ Cross-Chain Messaging

The `MessageSender.sol` and `MessageReceiver.sol` contracts facilitate sending and receiving arbitrary data across chains.

### Frontend Interaction

- **Send a Message:** Through the frontend, send a message from one blockchain to another. The interface will guide you through inputting the message and selecting the destination.

- **Receive a Message:** The frontend will display received messages on the destination blockchain, allowing you to track and verify cross-chain communication.

### Details

- The frontend handles all the complexities of sending and receiving messages, making it easy to interact with the smart contracts.

### Links

[Chainlink Docs: Getting Started](https://docs.chain.link/ccip/getting-started)

## 🖼️ Cross-Chain NFT Minting

The `SourceMinter.sol` and `DestinationMinter.sol` contracts enable NFT minting on a destination chain via cross-chain requests.

### Frontend Interaction

- **Mint an NFT:** Initiate the minting of an NFT on the destination chain using the frontend. The interface will manage the transaction and notify you once the NFT is successfully minted.

- **View Minted NFTs:** The frontend will display the NFTs minted on the destination chain, allowing you to manage and interact with your assets.

### Details

- The `BGNFT.sol` contract manages the NFT minting on the destination chain.
- The frontend ensures a seamless experience for cross-chain NFT minting.

### Links

- [Demo video](https://vimeo.com/1011669688/1b965fd7ad)
- [Fleek](https://late-motorcycle-wailing.on-fleek.app/)

## 🎲 VRF (Verifiable Random Function)

Chainlink VRF provides a provably fair and verifiable source of randomness, enabling smart contracts to perform randomized functions securely.

### Frontend Interaction

- **Request Random Number:** The frontend interface allows users to request a random number, which will be provided by Chainlink VRF. Once requested, the frontend displays the status of the request.
- **Receive Random Number:** After the random number is generated, the frontend will display the result, which can be used for various applications (e.g., gaming, lotteries, or randomized selections).

### Details

- The `VRFConsumer.sol` contract interacts with Chainlink VRF to request and receive random numbers.
- You must fund the contract with LINK tokens for requesting random numbers.
- The `fulfillRandomWords` function will be automatically called when the random number is ready, and it can be used to trigger further contract functionality based on the random outcome.

### Credits
- Smart contract was part of Chainlinks documentation
- Boiler plate: Scaffold-ETH2
### Links

- [Chainlink Docs: VRF](https://docs.chain.link/vrf/v2/introduction/)

## Links

- [Demo video](https://vimeo.com/1011669688/1b965fd7ad)
- [Fleek](https://late-motorcycle-wailing.on-fleek.app/)
