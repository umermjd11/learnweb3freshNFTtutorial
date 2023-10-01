# About
This repository contains code for building a basic NFT (Non-Fungible Token) contract on the Ethereum network using Hardhat and OpenZeppelin Contracts 
# Etherscan 
https://sepolia.etherscan.io/address/0x94427d3183A522Ee6989F0a2b6314e186d7Ce90F

# contract address

0x94427d3183A522Ee6989F0a2b6314e186d7Ce90F

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

# Etherscan verification
```bash
npx hardhat verify --network sepolia --contract contracts/NFTee.sol:NFTee 0xee9eB382f5e0E1baee560C68D0DC9903016214DD "NFTee" "ITM"
```

