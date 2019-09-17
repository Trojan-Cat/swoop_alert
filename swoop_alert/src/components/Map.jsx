import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const {
  MarkerClusterer
} = require("react-google-maps/lib/components/addons/MarkerClusterer");

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      center={{
        lat: props.startLoc.lat,
        lng: props.startLoc.lng
      }}
      onClick={props.handleClickedMap}
    >
      <MarkerClusterer averageCenter enableRetinaIcons gridSize={15}>
        {props.isMarkerShown &&
          props.markers.map(marker => (
            <Marker
              position={{
                lat: marker.latitude,
                lng: marker.longtitude
              }}
            />
          ))}
      </MarkerClusterer>
    </GoogleMap>
  ))
);

export default Map;

// onBoundsChanged

// defaultCenter = {{ lat: -34.397, lng: 150.644 }}
/*
 defaultCenter={{
        lat: props.startLoc.lat,
        lng: props.startLoc.lng
      }}

      */
