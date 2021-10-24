const main = async () => {
  // Grabbed the wallet address of contract owner and a random wallet
  const [owner, randomPerson] = await hre.ethers.getSigners();

  // Compile your contract
  const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');

  // Deploy yhe contract
  const waveContract = await waveContractFactory.deploy();

  // Wait for contract to be mined
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);

  console.log("Contract deployed by:", owner.address);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();

  // Wave myself
  let waveTxn = await waveContract.wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  // Random person wave
  waveTxn = await waveContract.connect(randomPerson).wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
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
