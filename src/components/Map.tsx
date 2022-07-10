import React, { MutableRefObject } from "react";
import mapStyles from "./mapStyles";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { InfoWindow } from "@react-google-maps/api";
import MarkerComponent, { IMarker } from "./Marker";
import defaultMarkers from "./defaultMarkers";
import IPolygon, { PolygonComponent } from "./Polygon";
import defaultPolygons from "./defaultPolygons";

const libraries: "places"[] = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};

const center = {
  lat: 40.7411,
  lng: -73.9897,
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

  const [markers, setMarkers] = React.useState<IMarker[]>(defaultMarkers);
  const [selected, setSelected] = React.useState<IMarker | null>(null);
  const [polygons, setPolygons] = React.useState<IPolygon[]>(defaultPolygons);

  const mapRef: MutableRefObject<google.maps.Map | undefined> = React.useRef();
  const onMapLoad = React.useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  if (isLoaded) {
    return (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <MarkerComponent
            key={`${marker.lat}, ${marker.lng}`}
            marker={marker}
            setSelected={setSelected}
          />
        ))}

        {polygons.map((polygon) => (
          <PolygonComponent key={polygon.key} polygon={polygon} />
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
