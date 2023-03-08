const hre = require("hardhat");

async function main() {
  const nftContract = await hre.ethers.getContractFactory("NFTee");
  const deployedNFTContract = await nftContract.deploy();
  await deployedNFTContract.deployed();
  
  console.log("NFT Contract Address:", deployedNFTContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
