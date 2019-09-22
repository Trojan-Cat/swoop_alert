import React from "react";

import useMarkerForm from "../hooks/useMarkerForm";
import apis from "../api";

import { Form, Button, Label, Input } from "../styles/MarkerForm";

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
    <Form onSubmit={handleSubmit}>
      <Label>
        Latitude:
        {latitude}
      </Label>
      <label>
        Longtitude:
        {longtitude}
      </label>
      <label>Adddress: </label>
      <label>Note</label>
      <Input
        type="text"
        value={inputs}
        name="note"
        onChange={handleInputChange}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default MarkerForm;
