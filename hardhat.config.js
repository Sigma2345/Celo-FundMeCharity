require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("dotenv").config()
/**
 * @type import('hardhat/config').HardhatUserConfig
 */


module.exports = {
  defaultNetwork: "hardhat", 
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 31337
    }, 
    alfajores: {
     url: "https://alfajores-forno.celo-testnet.org",
     accounts: [process.env.PRIVATE_KEY],
     chainId: 44787
   }
  }, 
  namedAccounts:{
    deployer: 0 
  }
};
