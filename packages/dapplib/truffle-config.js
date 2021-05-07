require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain coin gesture infant swift setup'; 
let testAccounts = [
"0xfa7b7a7c105f1cfe414aca59af3733493b601fb6131654b6b9598a1e6d61f202",
"0x105da19b9457ef01b60bf6cb1766ebb910242facdf92dc649722621111f21e56",
"0x845e12a473ba46ad77067efa09b28a90ae34ec60ccd871984d2efefaba627789",
"0x0bb3816449d1a20ab65ea892bb7f6c5d508db13020cfb622bf43fecd294dd8e0",
"0x09b2d4b67810ae66b86373210921912eaba904ea28e566538a6d1555a6d4a973",
"0x7faa983584803808fe2aedbb5853096556f58abf8dd6bb19db5ce7a5154caf89",
"0x15770b9453b1ab77426f5a7277b363c22cc03abf52129a2b5a07482aadae06b7",
"0xb4c42b5fbd9e5a93ef77d3b17f9192082180474f544422116b9843a8d34af995",
"0xcaf8fd0ec193c6f03acfd5e656e49d066a3fcbe52d6c16bae02dfe783867648a",
"0xcc4270f687790533698a22c32c5f51d7088a393b553c2bc530dd04043b0ecec3"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
