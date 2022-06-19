const Web3 = require('web3')
const ContractKit = require('@celo/contractkit')

const web3 = new Web3(`https://celo-alfajores--rpc.datahub.figment.io/apikey/${process.env.API_KEY}/`)

const kit = ContractKit.newKitFromWeb3(web3)
const data = require('./artifacts/contracts/FundMeCharity.sol/FundMe.json')
const Account = require('./celo_account');

async function DeployFundCharity() {
    const account = Account.getAccount()
    kit.connection.addAccount(account.privateKey) 
    let tx = await kit.connection.sendTransaction({
        from: account.address,
        data: data.bytecode
    })
    return tx.waitReceipt()
}

module.exports = {
    DeployFundCharity
}
