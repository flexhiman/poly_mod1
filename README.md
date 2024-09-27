# QuantumVortex NFT Project

This project demonstrates deploying an NFT collection on the Ethereum blockchain, mapping it to the Polygon network, and transferring assets using the Polygon Bridge. The collection includes 5 NFTs with unique AI-generated images, stored on IPFS. The NFTs are minted in batches and bridged from Ethereum sepolia Testnet.

## Features
- *NFT Collection*: ERC721A-based NFT collection named QuantumVortex.
- *AI-Generated Artwork*: NFTs are created using AI tools like DALL·E or Midjourney.
- *IPFS Storage*: Metadata and images are stored on IPFS via Pinata.
- *Batch Minting*: NFTs are minted in batches for efficiency using ERC721A.
- *Prompt Description*: The contract includes a function to display the prompt used to generate the images.

## Smart Contracts
### QuantumVortex.sol
- *maxQuantity*: Maximum number of tokens that can be minted (5).
- *baseUrl*: The IPFS URL where the NFTs are stored.
- *prompt*: A string representing the prompt used to generate the NFT images.
- *mint(uint256 quantity)*: Function to mint NFTs, only accessible by the contract owner.
- *promptDescription()*: Returns the description prompt for the NFT collection.
  
## Deployment
### Requirements
- *Node.js*: v14.x or later
- *Hardhat*: Ethereum development environment
- *Pinata*: For IPFS file storage

## Commands 
 npx hardhat run scripts/deploy.js

deploy the sepolia network:-  
```npx hardhat run scripts/deploy.js --network sepolia```

next process is to mint:- 
```npx hardhat run scripts/batchMint.js --network sepolia```

to verify and deposit:- 
```npx hardhat run scripts/approvedDepositjs --network sepolia```

this command is to run the getbalance.js script on the amoy network:- 
```npx hardhat run scripts/getBalance.js --network amoy```

### After running these commands
### - copy the address check the balance of the wallet and verify the transaction.
