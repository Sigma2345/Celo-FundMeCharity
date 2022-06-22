const { network } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    
    const fundMeCharity = await deploy("FundMe", {
        from: deployer, 
        args: [], 
        log: true, 
        waitConfirmations: network.config.blockConfirmations || 1
    })
}

module.exports.tags = ["all", "main"]
