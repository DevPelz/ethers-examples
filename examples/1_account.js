const { ethers } = require("ethers");

const ALCHEMY_ID = "RaPCx4JgXvplxH-bHQaNkh42750329Ze";
const provider = new ethers.JsonRpcProvider(
  `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_ID}`
);

const address = "0x915bFb22C3fe6E3Dd51c048bF54deDb085B8f1e6";
const main = async () => {
  console.log("================Running================");
  const balance = await provider.getBalance(address);
  console.log(
    `Eth balance of ${address} is: ${ethers.formatEther(balance)} ETH`
  );
};

main();
