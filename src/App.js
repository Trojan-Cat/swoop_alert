import React from "react";
import "./App.css";
import Home from "./components/Home";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <Home />
      <Map
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `50vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        markers={[
          { lat: -37.716871, lng: 144.8898329 },
          { lat: -35.716871, lng: 144.8898329 }
        ]}
      />
    </div>
  );
}

//const markers = { lat: -34.397, lng: 150.644 };

export default App;
