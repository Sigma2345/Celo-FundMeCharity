require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const { task } = require("hardhat/config");
const path = require('path')
const privateKeyFile = path.join(__dirname, './.secret')
const Account = require('./celo_account')
const { DeployFundCharity } = require("./celo_deploy")
const {Proposal, getProposal} = require('./celo-newProposal')
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


task("celo-account", "Prints account address or create a new", async () => {
  fs.existsSync(privateKeyFile) ?
    console.log(`Address ${Account.getAccount().address}`)
    : Account.setAccount();
});



task("celo-deploy", "Prints account address or create a new", async () => {
    const tx = await DeployFundCharity() ;
    console.log(tx);
    console.log(`save the contract address ${tx.contractAddress}`)
});

task("celo-propose", "proposal", async () => {
    const tx = await Proposal();
    console.log(tx); 
    console.log("Proposal Made ............")
})

task("celo-getProposal", "get proposal", async () => {
    const tx = await getProposal();
    console.log(tx); 
    console.log("got Proposal ............")
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
};
