/* global google */

import React, { useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

// import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

const {
  MarkerClusterer
} = require("react-google-maps/lib/components/addons/MarkerClusterer");

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      center={{ lat: props.startLoc.lat, lng: props.startLoc.lng }}
      onClick={props.handleClickedMap}
      heatmapLibrary
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
      <Marker
        position={{
          lat: props.newMarker.latitude,
          lng: props.newMarker.longtitude
        }}
      />
    </GoogleMap>
  ))
);

export default Map;
