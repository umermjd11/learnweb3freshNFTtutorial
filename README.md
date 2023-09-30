# About
This repository contains code for building a basic NFT (Non-Fungible Token) contract on the Ethereum network using Hardhat and OpenZeppelin Contracts 
# Etherscan 
https://sepolia.etherscan.io/address/0xee9eB382f5e0E1baee560C68D0DC9903016214DD

# contract address

0xee9eB382f5e0E1baee560C68D0DC9903016214DD

# deployer address
0x1b7BD17E7A19C96915454132401BDDCc6aB3C640

# to execute the script
```bash
npm init --yes
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox

npm install --save-dev @openzeppelin/contracts
npx hardhat compile
npm install dotenv
npx hardhat run scripts/deploy.js --network sepolia
```

