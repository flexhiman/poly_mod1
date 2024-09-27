const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/QuantumVortex.sol/QuantumVortex.json");

const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x09587C4B0b2942Cfe7471428eA83Cb258923eD47"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });