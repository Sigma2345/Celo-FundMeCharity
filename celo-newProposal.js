const Web3 = require('web3')
const ContractKit = require("@celo/contractkit")
const fs = require('fs')
const path = require('path')
require('dotenv').config()

const web3 = new Web3(`https://celo-alfajores--rpc.datahub.figment.io/apikey/${process.env.API_KEY}/`)
const kit = ContractKit.newKitFromWeb3(web3)
const data = require('./artifacts/contracts/FundMeCharity.sol/FundMe.json')
const Account = require('./celo_account');

async function Proposal() {
    const account = Account.getAccount()
    kit.connection.addAccount(account.privateKey) 
    let contract = new kit.connection.web3.eth.Contract(data.abi, "0x41107ADCf4b6b41c1d4230cf3e9f6d2c171B79C7") 
    const tx = await contract.methods.newProposal(10,"for testing").send({ from: account.address, gas: 400000 })
    return tx; 
}

async function getProposal() {
    const account = Account.getAccount()
    kit.connection.addAccount(account.privateKey) 
    let contract = new kit.connection.web3.eth.Contract(data.abi, "0x41107ADCf4b6b41c1d4230cf3e9f6d2c171B79C7") 
    const tx = await contract.methods.getProposal(0).send({ from: account.address, gas: 400000 })
    console.log('This is func ...................')
    // const txReceipt = await tx.wait(1)
    console.log(tx)
    console.log('...........................')
    return tx;
}

module.exports = {
    Proposal, 
    getProposal
}
