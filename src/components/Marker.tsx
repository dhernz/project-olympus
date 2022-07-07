import React, { Dispatch, SetStateAction } from "react";

import { Marker as GoogleMapsMarker } from "@react-google-maps/api";

interface Marker {
  lat: number;
  lng: number;
  url: string;
  width: number;
  height: number;
}

interface Props {
  marker: Marker;
  setSelected: Dispatch<SetStateAction<Marker | null>>;
}

const Marker: React.FC<Props> = ({ marker, setSelected }) => {
  return (
    <GoogleMapsMarker
      position={{ lat: marker.lat, lng: marker.lng }}
      icon={{
        url: marker.url,
        scaledSize: new window.google.maps.Size(marker.width, marker.height),
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
