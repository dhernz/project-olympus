import React, { MutableRefObject } from "react";
import mapStyles from "./mapStyles";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { InfoWindow } from "@react-google-maps/api";
import Marker from "./Marker";
import defaultIcons from "./defaultIcons";

const libraries: "places"[] = ["places"];
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
};

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
      ? process.env.REACT_APP_GOOGLE_MAPS_API_KEY
      : "",
    libraries,
  });

  const [markers, setMarkers] = React.useState<Marker[]>(defaultIcons);
  const [selected, setSelected] = React.useState<Marker | null>(null);

  const mapRef: MutableRefObject<google.maps.Map | undefined> = React.useRef();
  const onMapLoad = React.useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const onMapClick = React.useCallback((event: any) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        url: "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
        width: 30,
        height: 30,
      },
    ]);
  }, []);

  if (isLoaded) {
    return (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}, ${marker.lng}`}
            marker={marker}
            setSelected={setSelected}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h2>hello</h2>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    );
  } else {
    return null;
  }
};

export default Map;
