// Import the Hardhat package
const hre = require("hardhat");

async function main() {
  console.log("deploying NFTee");
  // Using `hre` - Hardhat Runtime Environment - we find and deploy
  // a contract named `NFTee`
  const nftContract = await hre.ethers.deployContract("NFTee");

  console.log("deploying NFTee 2");
  // We wait for the contract to finish deploying
  await nftContract.waitForDeployment();

  console.log("deploying NFTee 3");

  // We print the address of the deployed contract to our console
  console.log("NFT Contract Address:", nftContract.target);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });