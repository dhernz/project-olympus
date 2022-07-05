import logo from './logo.svg';
import './App.css';
import React from "react";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core';

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { formatRelative } from "date-fns";
import mapStyles from "./mapStyles";


const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};

const center = {
  lat: 40.7831,
  lng: -73.9712,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
}

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
  supportedChainIds: [1, 3, 4, 5, 42]
 });

function App() {
  const { activate, deactivate } = useWeb3React();
  const { active, chainId, account } = useWeb3React();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,

  });

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div className="App">
      <h1>
        Olympus
        <button onClick={() => { activate(CoinbaseWallet) }}>Coinbase Wallet</button>
        <button onClick={() => { activate(WalletConnect) }}>Wallet Connect</button>
        <button onClick={() => { activate(Injected) }}>Metamask</button>
        <button onClick={deactivate}>Disconnect</button>
        <div>Wallet: {account}</div>
      
      </h1>
    
     
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
      ></GoogleMap>
    </div>
  );
}

export default App;
