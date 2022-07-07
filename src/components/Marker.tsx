import React from "react";

import { Marker as GoogleMapsMarker } from "@react-google-maps/api";

interface Marker {
  lat: number,
  lng: number,
  url: string,
}

interface Props {
  marker: Marker;
  setSelected: (marker : Marker) => void
}


const Marker : React.FC<Props> = ({ marker, setSelected }) => {
  return (
    <GoogleMapsMarker 
    position={{ lat: marker.lat, lng: marker.lng}}
      icon={{
        url: marker.url,
        scaledSize: new window.google.maps.Size(30, 30),
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(15, 15),
      }}
      onClick={() => {
        setSelected(marker);
      }}
    />
  );
};

export default Marker;
