import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
      onClick={props.handleClickedMap}
    >
      {props.isMarkerShown &&
        props.markers.map(marker => (
          <Marker
            position={{
              lat: marker.latitude,
              lng: marker.longtitude
            }}
          />
        ))}
    </GoogleMap>
  ))
);

export default Map;

//defaultCenter = {{ lat: -34.397, lng: 150.644 }}
/*
 defaultCenter={{
        lat: props.startLoc.lat,
        lng: props.startLoc.lng
      }}

      */
