import React, { useState } from 'react';
import NewPlantingForm from './NewPlantingForm';
import EditPlantingForm from './EditPlantingForm';
import PlantingList from './PlantingList';
import PlantingDetail from './PlantingDetail';

const TreeInventoryControl = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [mainPlantingList, setMainPlantingList] = useState([]);
  const [selectedPlanting, setSelectedPlanting] = useState(null);
  const [editing, setEditing] = useState(false);

  const handleClick = () => {
    //all the setState methods
  }

  return (
    <React.Fragment>
      <EditPlantingForm />
      <NewPlantingForm />
      <PlantingList />
      <PlantingDetail />
    </React.Fragment>
  )
}

TreeInventoryControl.propTypes = {}

export default TreeInventoryControl