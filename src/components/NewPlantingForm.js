import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import MultiUseForm from './MultiUseForm';

const NewPlantingForm = (props) => {
  function handleNewPlantingFormSubmit(event) {
    event.preventDefault();
    props.onNewPlantingCreation({
      species: event.target.species.value, 
      hardinessZone: event.target.hardinessZone.value, 
      typeOfSoil: event.target.typeOfSoil.value, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <MultiUseForm 
        formSubmissionHandler={handleNewPlantingFormSubmit}
        buttonText="Let's Plant Trees!" />
    </React.Fragment>
  );
};

NewPlantingForm.propTypes = {
  onNewPlantingCreation: PropTypes.func
};

export default NewPlantingForm;