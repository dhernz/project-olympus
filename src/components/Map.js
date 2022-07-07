import React from "react";
import mapStyles from "./mapStyles";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { InfoWindow } from "@react-google-maps/api";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "olympus-e48a0.firebaseapp.com",
  projectId: "olympus-e48a0",
  storageBucket: "olympus-e48a0.appspot.com",
  messagingSenderId: "649557284069",
  appId: "1:649557284069:web:57d2e9ff8d1103609b700c",
  measurementId: "G-NHXBDYVBG5"
};
// init firebase app
initializeApp(firebaseConfig)

//init services

const db = getFirestore()

// collection rf
const colRef = collection(db,'Locations');

// get collection data

getDocs(colRef)
  .then((snapshot) => {
    let locations = [];
    snapshot.docs.forEach((doc) => {
      locations.push({ ...doc.data(), id: doc.id })
    });
    for(var i = 0; locations.length>= i; i++){
      console.log(locations[i].GPS._lat);
      console.log(locations[i].GPS._long);
    }
  })
  .catch( err => {
    console.log(err.message);
  });



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

  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

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
        time: new Date(),
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
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
            onClick={() => {
              setSelected(marker);
            }}
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
