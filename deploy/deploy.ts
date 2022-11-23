import hardhat, { ethers } from "hardhat";
import { getContractDeployParams } from "./config";

async function deployNft() {
  const cfcFactory = await ethers.getContractFactory("CrowdTactics");
  const cfcParams = getContractDeployParams(hardhat.network.name);
  const cfcDeployer = await cfcFactory.deploy(
    cfcParams[0],
    cfcParams[1],
    cfcParams[2],
    cfcParams[3]
  );
  const cfc = await cfcDeployer.deployed();
  console.log(`
  CollectiveTactics deployed success! address: ${
    cfc.address
  } Please verify by command: 
npx hardhat verify --network ${hardhat.network.name} ${
    cfc.address
  } "${cfcParams.join(`" "`)}"`);
}

async function main() {
  await deployNft();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
