# Olympus Protocol
<img width="556" alt="Screen Shot 2022-07-10 at 11 15 05 PM" src="https://user-images.githubusercontent.com/12074151/178182028-4af0854f-d5ad-4fe7-a9f0-1998768fdd1b.png">

## Important Links
- [AR Demo](https://projectolympus.8thwall.app/hack-house/start)
- [Frontend Repo](https://github.com/dhernz/project-olympus-fe)
- [Backend Repo](https://github.com/KaiStryker/olympus-backend)
- [Twitter](https://twitter.com/ProtocolOlympus)

## Game Mechanics

Claim, Collect, Upgrade, Attack..

## The Protocol

### Partnerships



## Technologies

- Coinbase Wallet


- Google Maps JavaScript API (Kian)
We are using the Google Maps React library to render an interactive view of AR locations. 

- Backend and Database (Firebase)
We are utilizing Firebase to track metadata about each AR location. It is also used to pull information about how many tokens have been accrued at a location. This is called when players try to collect tokens from a location. 

- Smart Contracts (Solidity, Polygon)
We created two custom smart contracts. One for minting 1 trillion $OLY reward tokens and one for in-game player interactions. The Player interactions are vandalize: takes X amount of tokens out of the players wallet to reduce a locations health points. , upgrade: takes X amount of tokens out of the players wallet to reduce a locations health points, claim: distributes $OLY token rewards to users for daily and multiplier bonuses. The user has to approve the transaction contract to transfer tokens. The contracts inherit the ERC-2771 context contract which enables gasless transactions. 

-thirdweb
We are using thirdweb to deploy our contracts onto the Polygon L2 blockchain. We utilized the thirdweb SDK to facilitate our contract interactions and authorize wallets through their contract authorization script. This script provide a cookie to the user to validate their wallet once every 6 hours rather than requiring the user to re-validate for every transaction. The SDK also enables gasless transactions, provides an alternative to ethers, and has useful prebuilt contracts. 

-IPFS and Storj
We are using thirdweb deploy to pin the ABI to IPFS. In addition we are using Storj IPFS pinning to host in-game static assets.

