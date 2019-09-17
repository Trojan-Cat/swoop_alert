import { useState } from "react";

const useMarkerForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState();

  const handleInputChange = e => {
    e.persist();
    setInputs(e.target.value);
  };

  return {
    inputs,
    handleInputChange
  };
};

export default useMarkerForm;
