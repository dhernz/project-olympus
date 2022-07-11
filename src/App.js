import "./App.css";
import React from "react";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
import Button from "@mui/material/Button";
import Map from "./components/Map";
import { truncateAddress } from "./utils";
import Chip from '@mui/material/Chip';
import { useEffect, useState } from "react";

const CoinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  appName: "Web3-react Demo",
  supportedChainIds: [1, 3, 4, 5, 42],
});

const WalletConnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});



function App() {
  const { library,activate, deactivate } = useWeb3React();
  const { account } = useWeb3React();
  const [signature, setSignature] = useState("");
  const [signedMessage, setSignedMessage] = useState("");
  const [message, setMessage] = useState("Verify location interaction");
  const [error, setError] = useState("");

  const signMessage = async () => {
    
    try {
      const signature = await library.provider.request({
        method: "personal_sign",
        params: [message, account]
      });
      setSignedMessage(message);
      setSignature(signature);
    } catch (error) {
      setError(error);
    }
  };


  return (
    <div className="App">
      <div className="toolbar">
        <img alt="logo" style={{ width: 140 }} src="./Olympus-Game-Logo.png" />
        <div className="wallet">
        <Chip label="$OLY: 10" style={{color: 'white', backgroundColor: 'grey', marginRight: "1rem", fontSize: ".6rem"}}/>
          <Button
            variant="contained"
            style={{ marginRight: "1rem", fontSize: '.6rem'  }}
            onClick={() => {
              activate(Injected);
            }}
          >
            {account ? <div>{truncateAddress(account)}</div> : "Connect Wallet"}
          </Button>
        </div>
      </div>
      <Map />
    </div>
  );
}

export default App;
