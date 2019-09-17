import { useState } from "react";

import insertMarker from "../api";

const useMarkerForm = () => {
  const [inputs, setInputs] = useState();
  const [newMarker, setNewMarker] = useState();

  // Stops form from refreshing once submited
  const handleSubmit = e => {
    if (e) e.preventDefault();
    // Check if there is a new marker on the map
    // Call the api to add this marker
    console.log(newMarker);
    if (newMarker !== undefined) {
      console.log("we got something here");
      console.log(newMarker);
      // insertMarker(newMarker);
    }
  };

  // Takes note and adds it in
  const handleInputChange = e => {
    //  e.persit();
    setInputs(e.target.value);
  };

  const handleClickedMap = e => {
    const latitude = e.latLng.lat();
    const longtitude = e.latLng.lng();
    const marker = { latitude, longtitude };
    setNewMarker(marker);
    console.log(newMarker);
  };

  return { handleSubmit, inputs, handleInputChange, handleClickedMap };
};

export default useMarkerForm;
