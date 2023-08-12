const { ethers } = require("ethers");

const ALCHEMY_ID = "";
const provider = new ethers.JsonRpcProvider(
  `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_ID}`
);
const ERC_20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
];
const address = `0x6B175474E89094C44Da98b954EedeAC495271d0F`;
const contract = new ethers.Contract(address, ERC_20_ABI, provider);

const main = async () => {
  console.log("Fetching info...");
  console.log("==========================");
  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply = ethers.formatEther(await contract.totalSupply());

  const holderAddress = "0x075e72a5eDf65F0A5f44699c7654C1a76941Ddc8";
  const balanceOf = ethers.formatEther(await contract.balanceOf(holderAddress));

  console.log(`The ERC20 Token name is ${name}`);
  console.log(`The ERC20 Token symbol is ${symbol}`);
  console.log(`The ERC20 Token total supply is ${totalSupply}`);
  console.log(`The ERC20 Token balance of ${holderAddress} is: ${balanceOf}`);
};

main();
