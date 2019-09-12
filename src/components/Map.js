import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {props.markers.lat}
      {props.isMarkerShown &&
        props.markers.map(marker => (
          <Marker position={{ lat: marker.lat, lng: marker.lng }} />
        ))}
    </GoogleMap>
  ))
);

export default Map;
