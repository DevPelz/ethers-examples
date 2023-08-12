const { ethers } = require("ethers");

const ALCHEMY_ID = "";
const provider = new ethers.JsonRpcProvider(
  `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_ID}`
);

const account1 = "0x764693DD666E8dD9275CDE8F05C6B07446B1d941";
const account2 = "0x601eBA6fbb42B0EC20D821d5eB3f6a6EA7f35267";

const privateKey1 =
  "";
const wallet = new ethers.Wallet(privateKey1, provider);

const ERC20_ABI = [
  "function  balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount) returns (bool)",
];

const address = "0x779877A7B0D9E8603169DdbD7836e478b4624789";
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  // get balance of acccounts before transactions
  const balance = await contract.balanceOf(account1);

  console.log(`\nReading from ${address}\n`);
  console.log(`Balance of sender: ${balance}\n`);
  console.log("=============================");

  const contractWithWallet = contract.connect(wallet);
  const tx = await contractWithWallet.transfer(account2, balance);
  await tx.wait();

  console.log(`\n=============================\n`);
  console.log(tx);

  const balanceOfSender = ethers.formatEther(
    await contract.balanceOf(account1)
  );
  const balanceOfReciever = ethers.formatEther(
    await contract.balanceOf(account2)
  );

  console.log(`\nBalnace of accounts after transactions\n`);
  console.log(`Balance of Sender: ${balanceOfSender}`);
  console.log(`Balance of reciever: ${balanceOfReciever}`);
  console.log(`\n=============================\n`);
};

main();
