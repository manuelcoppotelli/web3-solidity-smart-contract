const main = async () => {
  // Compile your contract
  const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');

  // Deploy yhe contract
  const waveContract = await waveContractFactory.deploy();

  // Wait for contract to be mined
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
