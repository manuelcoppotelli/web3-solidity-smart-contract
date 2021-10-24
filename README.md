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
