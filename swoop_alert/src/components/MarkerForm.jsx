import React from "react";

import useMarkerForm from "../hooks/useMarkerForm";

const MarkerForm = () => {
  // Deconstructing hooks methods of for the function
  const { inputs, handleInputChange, handleSubmit } = useMarkerForm();
  return (
    <form onSubmit={handleSubmit}>
      <label>Latitude: variable</label>
      <label>Longatude: Variable</label>
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
