import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Map from "./components/Map";
import MarkerForm from "./components/MarkerForm";

// import useMarkerForm from "./hooks/useMarkerForm";

import apis from "./api";

function App() {
  // const { inputs, handleInputChange, handleSubmit } = useMarkerForm();
  const [newMarker, setNewMarker] = useState({ latitude: 0, longtitude: 0 });
  const [markers, setMarker] = useState([]);
  const [startLoc, setStartLoc] = useState({ lat: -37.814, lng: 144.96332 });

  // Check if we can get the geolocation
  // Using useEffect to only run once
  // Does an async call to get all the markers
  useEffect(() => {
    const didCancel = false;
    async function fetchMyAPI() {
      const response = await apis.getAllMarkers();
      if (!didCancel) {
        // Ignore if we started fetching something else
        console.log(response.data.data);
        response.data.data.map(markerApi => {
          const marker = { latitude: markerApi.lat, longtitude: markerApi.lng };
          console.log("Set marker called");
          setMarker(markers => [...markers, marker]);
        });
      }
    }

    fetchMyAPI();

    if (navigator.geolocation) {
      // 🗺️ yep, we can proceed!

      navigator.geolocation.getCurrentPosition(displayLocationInfo);
    } else {
    }
  }, []);

  // Send question to user to ask if we can use their location for a starting location
  function displayLocationInfo(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    setStartLoc({ lat, lng });
  }

  const handleClickedMap = e => {
    const latitude = e.latLng.lat();
    const longtitude = e.latLng.lng();
    const marker = { latitude, longtitude };
    setNewMarker(marker);

    setStartLoc({ latitude, longtitude });
    // TODO:  Display a marker for the new marker before it has been submitted
    // TODO: When it sets a new startLoc for the first time it goes back to the intial value set, after first click it is fine
  };

  return (
    <div className="App">
      <Header />
      <Map
        handleClickedMap={handleClickedMap}
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `70vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        markers={markers}
        startLoc={startLoc}
      />
      <MarkerForm newMarker={newMarker} />
    </div>
  );
}

export default App;
