import React from 'react';
import { v4 } from 'uuid';

const NewPlantingForm = (props) => {
  function handleNewPlantingFormSubmit(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      species: event.target.species.value, 
      hardinessZone: event.target.hardinessZone.value, 
      typeOfSoil: event.target.typeOfSoil.value, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewPlantingFormSubmit}>
        <input
          type='text'
          name='species'
          placeholder='Tree species' />
        <input
          type='text'
          name='hardinessZone'
          placeholder='Plant Hardiness Zone' />
        <textarea
          name='typeOfSoil'
          placeholder='Prefrred soil (e.g. loamy, peat, sandy)' />
        <button type='submit'>Create new planting</button>
      </form>
    </React.Fragment>
  );
};

export default NewPlantingForm;