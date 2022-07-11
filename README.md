# Olympus Protocol - Activate your community
<img width="556" alt="Screen Shot 2022-07-10 at 11 15 05 PM" src="https://user-images.githubusercontent.com/12074151/178182028-4af0854f-d5ad-4fe7-a9f0-1998768fdd1b.png">

Activating web3 communities IRL through an augmented reality protocol

## Important Links
- [Demo](https://project-olympus-fe.vercel.app/)
- [AR Experience](https://projectolympus.8thwall.app/hack-house/start)
- [Frontend Repo](https://github.com/dhernz/project-olympus-fe)
- [Backend Repo](https://github.com/KaiStryker/olympus-backend)
- [Twitter](https://twitter.com/ProtocolOlympus)

## The Game

Players compete to claim locations, landmarks, neighborhoods and entire cities for their web3 community.

Claim - Claim a location by pinning an NFT from your wallet onto the location

Collect - Earn $OLY for visiting locations and meeting up with friends 

Upgrade - Fortify your claimed location with a stronger fortress

Vandalize - Compete to attack and take over other locations


## The Protocol
Olympus is a generalized standard for pinning data to real world locations in the metaverse. Our infrastructure will provide application specific extensions that enable different use cases (ex. AR, real estate, events). Our developer SDK will provide rapid development APIs to easily build engaging AR experiences for web3 communities.

### Partnerships

Part of our monetization strategy involves sponsored locations where IRL businesses can host giveaways. Instead of claiming $OLY tokens at this location, users can claim NFT's that can be exchanged for freebies at that business. 

Our first partnership is with Froth NYC https://www.instagram.com/frothnewyork/?hl=en - where users can claim a free coffee by collecting the Froth NFT at their lower east side location.

## Future Features

In-game chat - Connect or be matched with other player either anonymously or with your Lens profile 

IRL event planning - Easily find impromptu or planned web3 meetups on a map and in the metaverse

Liquidity pools and staking - Enable players of generate basic income and APY through DeFi

Custom AR experience Builder - Communities can utilize our protocol to build their own AR experiences for their members like quests, battles, and treasure hunts

## Technologies

- Coinbase Wallet
Coinbase Wallet is used to get the users wallet address and also authorize and validate transactions on the blockchain. In order to play our game, new users to web3 will need to create their first crypto wallet with Coinbase.

- Polygon Smart Contracts
We created two custom smart contracts. One for minting 1 trillion $OLY reward tokens and one for in-game player interactions. The Player interactions are vandalize: takes X amount of tokens out of the players wallet to reduce a locations health points. , upgrade: takes X amount of tokens out of the players wallet to reduce a locations health points, claim: distributes $OLY token rewards to users for daily and multiplier bonuses. The user has to approve the transaction contract to transfer tokens. The contracts inherit the ERC-2771 context contract which enables gasless transactions. 

- thirdweb SDK
We are using thirdweb to deploy our contracts onto the Polygon L2 blockchain. We utilized the thirdweb SDK to facilitate our contract interactions and authorize wallets through their contract authorization script. This script provide a cookie to the user to validate their wallet once every 6 hours rather than requiring the user to re-validate for every transaction. We are using OpenZeppelin defender for their relay service, which is utilized to conduct gasless transacations on behalf of the user.
- Google Maps JavaScript API
We are using the Google Maps React library to render an interactive view of AR locations. 

- Backend APIs and Database (Firebase)
We are utilizing Firebase to track metadata about each AR location. It is also used to pull information about how many tokens have been accrued at a location. This is called when players try to collect tokens from a location. 

- IPFS and Storj
We are using thirdweb deploy to pin the ABI to IPFS. In addition we are using Storj IPFS pinning to host in-game static assets.

