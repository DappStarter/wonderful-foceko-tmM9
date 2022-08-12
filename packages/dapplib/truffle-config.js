require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar proud hunt brass food that'; 
let testAccounts = [
"0x75c855002ea3576d89f4fa5fcd37a9cc15d2f8716c46af3de01fbcc823fd1899",
"0x2af5c0fc4ec4111ffb607ecb178e23022a9084ec8e42d3f43588d4975d4367c0",
"0x0b86077efe09a42f3a8ab14b1e3a00e400c129a9430a62862f051057f03bc338",
"0xe49ced94dfeda4c94378d52169318070e8ca15a99cf9e1c34076ac6b03dade80",
"0x444f91e9c66e141552848e8347cd8c86fe58c055827bace3bd90d36d6cf578f1",
"0xb04aa20aab162dbdc146ac6e37e4db9fb25c8fd1cdf07d1db7a35855eba0119d",
"0xf186053bab013db5e17c0dcac029d8cbf226196852e1f7c174328f5997650ece",
"0x1a6dfa3fac629b6f372a1223b5e328511710fb3680f0b18d1ecb77d3c4388871",
"0xa19cbc7d917a44e8b562a091b3166f4861b1994f3a0c2695a0edbb26f5699634",
"0xff3059856b000a01b6897b81e0d347afa5846b7fb111f616e9629bb99316c262"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

