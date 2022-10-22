import React, { useState } from 'react';
import NewPlantingForm from './NewPlantingForm';
import PlantingList from './PlantingList';
import PlantingDetail from './PlantingDetail';

const TreeInventoryControl = (props) => {
  return (
    <React.Fragment>
      <NewPlantingForm />
      <PlantingList />
      <PlantingDetail />
    </React.Fragment>
  )
}

TreeInventoryControl.propTypes = {}

export default TreeInventoryControl