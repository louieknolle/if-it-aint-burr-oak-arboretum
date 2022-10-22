import React from "react";
import MultiUseForm from "./MultiUseForm";
import PropTypes from "prop-types";

function EditPlantingForm (props) {
  const { planting } = props;

  function handleEditPlantingFormSubmission(event) {
    event.preventDefault();
    props.onEditPlanting({species: event.target.species.value, 
                          hardinessZone: event.target.hardinessZone.value, 
                          typeOfSoil: event.target.typeOfSoil.value, 
                          id: planting.id
                        });
  }

  return (
    <React.Fragment>
      <MultiUseForm 
        formSubmissionHandler={handleEditPlantingFormSubmission} 
        buttonText="Update Planting" />
    </React.Fragment>
  );
}

EditPlantingForm.propTypes = {
  onEditPlanting: PropTypes.func,
  planting: PropTypes.object
};

export default EditPlantingForm;