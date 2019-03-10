import web3 from './web3';
import Campaign from './build/Campaign.json';

export default (address) => {
  return new web3.eth.Contract(
      // The interface from the build/Campaign:
      JSON.parse(Campaign.interface),
      address
  );
};