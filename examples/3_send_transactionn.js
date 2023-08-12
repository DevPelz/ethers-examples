const { ethers } = require("ethers");

const ALCHEMY_ID = "Fq6M_o-JoCyvyZVR8YfJlWb5k2tvy_qh";
const provider = new ethers.JsonRpcProvider(
  `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_ID}`
);

const account1 = "0x764693DD666E8dD9275CDE8F05C6B07446B1d941"; //sender
const account2 = "0x601eBA6fbb42B0EC20D821d5eB3f6a6EA7f35267"; //recipient

const privateKey1 =
  "d0e66d437ab3f746ca7842a3e0424d446ba61156146acc96b697695d2ac3f42c"; //sender private key

const wallet = new ethers.Wallet(privateKey1, provider);

const main = async () => {
  console.log("Running Transactions...");
  console.log(`\n========================\n`);
  // show account 1 balance before transfer
  const senderBalanceBefore = ethers.formatEther(
    await provider.getBalance(account1)
  );
  // show account 2 balance before transfer
  const recieverBalanceBefore = ethers.formatEther(
    await provider.getBalance(account2)
  );

  console.log(`Sender balance before transfer: ${senderBalanceBefore}`);
  console.log(`Reciever balance before transfer: ${recieverBalanceBefore}`);

  console.log(`\n========================\n`);
  // send ether
  const tx = await wallet.sendTransaction({
    to: account2,
    value: ethers.parseEther("0.01"),
  });

  //   fetch info
  await tx.wait();
  console.log(tx);

  // show account 1 balance after transfer
  const senderBalanceAfter = ethers.formatEther(
    await provider.getBalance(account1)
  );
  // show account 2 balance after transfer
  const recieverBalanceAfter = ethers.formatEther(
    await provider.getBalance(account2)
  );

  console.log(`\n========================\n`);

  console.log(`Sender balance after transfer: ${senderBalanceAfter}`);
  console.log(`Reciever balance after transfer: ${recieverBalanceAfter}`);

  console.log(`\n========================\n`);
};

main();
