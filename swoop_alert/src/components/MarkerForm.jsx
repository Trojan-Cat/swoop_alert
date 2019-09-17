import React from "react";

import useMarkerForm from "../hooks/useMarkerForm";
import apis from "../api";

const MarkerForm = props => {
  // Deconstructing hooks methods of for the function

  const { inputs, handleInputChange } = useMarkerForm();
  const { latitude, longtitude } = props.newMarker;

  const handleSubmit = e => {
    if (e) e.preventDefault();
    // callback();

    if (latitude !== undefined) {
      const marker = {
        note: inputs,
        lat: latitude,
        lng: longtitude,
        weight: 2
      };
      apis.insertMarker(marker);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Latitude:
        {latitude}
      </label>
      <label>
        Longtitude:
        {longtitude}
      </label>
      <label>Adddress: </label>
      <label>Note</label>
      <input
        type="text"
        value={inputs}
        name="note"
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MarkerForm;
