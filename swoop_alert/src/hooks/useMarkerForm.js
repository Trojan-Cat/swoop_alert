import { useState } from 'react'

const useMarkerForm = (initialValues, callback) => {
    const [inputs, setInputs] = useState();
    //Stops form from refreshing once submited
    const handleSubmit = (e) => {
        if (e) e.preventDefault();

    }

    //Takes note and adds it in
    const handleInputChange = (e) => {
        //  e.persit();
        setInputs(e.target.value);
    }
    //TODO: Grab the cords from marker?
    //TODO: Send through on post, this sends through the note and current cords
    return { handleSubmit, inputs, handleInputChange };
}

export default useMarkerForm;