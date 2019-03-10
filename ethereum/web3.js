import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
} else {
    // We are on the server *OR* the user is not running metamask.
    // Create our own provider:
    const provider = new Web3.providers.HttpProvider(
        // Pass the URL of some remote node that we have excess to (such as infura node).
        'https://rinkeby.infura.io/v3/' + process.env.INFURA_API_KEY
    );
    web3 = new Web3(provider);
}

export default web3;