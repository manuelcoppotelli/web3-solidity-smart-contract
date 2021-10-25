# Web3 App with Solidity + Ethereum Smart Contracts

This repo holds the step-by-step code for the [Build a Web3 App with Solidity + Ethereum Smart Contracts](https://app.buildspace.so/courses/CO02cf0f1c-f996-4f50-9669-cf945ca3fb0b) course by [_buildspace](https://buildspace.so)

## [Lesson 1] Get your local Ethereum networking running

```shell
npm init -y
npm install --save-dev hardhat
npx hardhat
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
npx hardhat accounts > accounts.txt
npx hardhat compile
npx hardhat test
```

## [Lesson 2] Write your first smart contract in Solidity

Download the VS Code Solidity extension for easy syntax highlighting [here](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity).

Written the contract `WavePortal.sol`

## [Lesson 3] Compile contract locally and run it

Write `run.js` script to locally run the contract

Launch via:

```shell
npx hardhat run scripts/run.js
```

## [Lesson 4] Store 👋 data on our smart contract

Use state variable in `WavePortal.sol`

Call contract functions from `run.js`

## [Lesson 5] Deploy locally so we can start building the website

When the `run.js` script ends, Hardhat will automatically destroy that local network.

Edited `hardhat.config.js` to use localhost

To keep the local network alive

```shell
npx hardhat node
```

Created a `deploy.js` script to deploy the contract on local network; use it via:

```shell
npx hardhat run scripts/deploy.js --network localhost
```

## [Lesson 6] Setup a basic react app, setup Metamask

Setup the `webapp` code.

To run the webapp:

```shell
cd webapp
npm install
npm run start
```
