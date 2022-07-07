import React from "react";
import mapStyles from "./mapStyles";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { InfoWindow } from "@react-google-maps/api";
import Marker from "./Marker.tsx";
import defaultIcons from "./defaultIcons";

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
};

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [markers, setMarkers] = React.useState(defaultIcons);
  const [selected, setSelected] = React.useState(null);

  // React.useEffect(() => {
  //   console.log("in use effect");
  //   setMarkers([...defaultIcons, defaultIcons[0]]);
  // }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onMapClick = React.useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        url: "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
      },
    ]);
  }, []);

  if (isLoaded) {
    console.log(markers);

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
