import React, { Dispatch, SetStateAction } from "react";

import { Marker as GoogleMapsMarker } from "@react-google-maps/api";

export interface IMarker {
  title: string;
  claim: string;
  health: string;
  streak: string;
  button: string;
  lat: number;
  lng: number;
  url: string;
  width: number;
  height: number;
}

interface Props {
  marker: IMarker;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const MarkerComponent: React.FC<Props> = ({ marker, setOpen }) => {
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
        setOpen(true);
      }}
    />
  );
};

export default MarkerComponent;
