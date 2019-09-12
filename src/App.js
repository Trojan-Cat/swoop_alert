import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Map from "./components/Map";

function App() {
  const [markers, setMarker] = useState([]);
  // const [startLoc, setStartLoc] = useState({ lat: -34.397, lng: 150.644 });

  // Check if we can get the geolocation
  if (navigator.geolocation) {
    // 🗺️ yep, we can proceed!
    navigator.geolocation.getCurrentPosition(displayLocationInfo);
  } else {
  }

  //Send question to user to ask if we can use their location for a starting location
  function displayLocationInfo(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    console.log("RAN");

    console.log(`longitude: ${lng} | latitude: ${lat}`);
    //TODO: This loops and rerenders the component each time it is set, and sets it back to the start etc
    //setStartLoc({ startLoc: { lat: lat, lng: lng } });
  }

  const handleClickedMap = e => {
    let latitude = e.latLng.lat();
    let longtitude = e.latLng.lng();

    const marker = { latitude: latitude, longtitude: longtitude };
    setMarker([...markers, marker]);
  };

  return (
    <div className="App">
      <Home />
      <Map
        handleClickedMap={handleClickedMap}
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `70vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        // startLoc={startLoc}
        markers={markers}
      />
    </div>
  );
}

export default App;

//defaultCenter = {{ lat: -34.397, lng: 150.644 }}
