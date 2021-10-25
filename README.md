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

## [Lesson 7] Deploy smart contract to a real testnet

Edited `hardhat.config.js` to use rinkeby demo network

The `YOUR_ALCHEMY_API_URL` param can be grabed from the [Alchemy](https://dashboard.alchemyapi.io) dashboard

The `YOUR_PRIVATE_RINKEBY_ACCOUNT_KEY` param che be grabbed by opening MetaMask, change the network to "Rinkeby Test Network" and then click the three dots and select "Account Details" > "Export Private Key"

Deploy to rinkeby via:

```shell
npx hardhat run scripts/deploy.js --network rinkeby
```

## [Lesson 8] Connect our wallet to our web app

Improve `App.js` to connect with the wallet, sort of authentication

## [Lesson 9] Call the our deployed smart contract from our web app

Improve `App.js` to call smart contract function

## [Lesson 10] Storing messages from users on the blockchain

Improve `WavePortal.sol` to handle message

Improve `run.js` to test message handling

Re-deploy the contract and change references in `App.js`

Improve `App.js` to get all messages from contract and display them

## [Lesson 11] Fund contract, set a prize, and send users Ethereum

To send ETH to someone, our contract needs to have ETH on it. we first deploy the contract, we "fund" it.

Improve `WavePortal.sol` to pay who waves

Improve `run.js` and `deploy.js` to set initial value to the contract

Re-deploy the contract and change references in `App.js`

## [Lesson 12] Randomly pick a winner and prevent spammers

Improve `WavePortal.sol` add pseudo-random function prize

Improve `run.js` to test the new contract

Improve `WavePortal.sol` add a cooldown function to your site so people can't just spam to win

Re-deploy the contract and change references in `App.js`
