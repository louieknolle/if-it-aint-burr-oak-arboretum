import React, { useState } from 'react';
import NewPlantingForm from './NewPlantingForm';
import EditPlantingForm from './EditPlantingForm';
import PlantingList from './PlantingList';
import PlantingDetail from './PlantingDetail';

const TreeInventoryControl = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [mainPlantingList, setMainPlantingList] = useState([]);
  const [selectedPlanting, setSelectedPlanting] =useState(null);
  const [editing, setEditing] = useState(false);

  function handleClick() {
    if (selectedPlanting != null) {
      setFormVisible(false);
      setSelectedPlanting(null);
      setEditing(false);
    } else {
      setFormVisible(!formVisible);
    }
  }

  function handleDeletingPlanting(id) {
    const newMainPlantingList = mainPlantingList.filter(planting => planting.id !== id);
    setMainPlantingList(newMainPlantingList);
    setSelectedPlanting(null);
  }

  function handleEditClick() {
    setEditing(true);
  }

  function handleEditingPlantingInList(plantingToEdit) {
    const editedMainPlantingList = mainPlantingList
      .filter(planting => planting.id !== selectedPlanting.id)
      .concat(plantingToEdit);
    setEditing(false);
    setMainPlantingList(editedMainPlantingList);
    
  }

  function handleAddingNewPlantingToList(newPlanting) {
    const newMainPlantingList = mainPlantingList.concat(newPlanting);
    setMainPlantingList(newMainPlantingList)
    setFormVisible(false);
  }

  function handleChangingSelectedPlanting(id) {
    const selection = mainPlantingList.filter(planting => planting.id === id)[0];
    setSelectedPlanting(selection);
  }

  let currentlyVisibleState = null;
  let buttonText = null; 

  if (editing ) {      
    currentlyVisibleState = <EditPlantingForm planting = {selectedPlanting} onEditPlanting = {handleEditingPlantingInList} />
    buttonText = "Return to Planting List";
  } else if (selectedPlanting != null) {
    currentlyVisibleState = <PlantingDetail 
    planting={selectedPlanting} 
    onClickingDelete={handleDeletingPlanting}
    onClickingEdit = {handleEditClick} />
    buttonText = "Return to Planting List";
  } else if (formVisible) {
    currentlyVisibleState = <NewPlantingForm onNewPlantingCreation={handleAddingNewPlantingToList}/>;
    buttonText = "Return to Planting List"; 
  } else {
    currentlyVisibleState = <PlantingList onPlantingSelection={handleChangingSelectedPlanting} plantingList={mainPlantingList} />;
    buttonText = "Add Planting"; 
  }

  return (
    <React.Fragment>
      <div className='container py-10 px-10 mx-0 min-w-full grid place-items-center'>
        {currentlyVisibleState}
        <button 
          className='border-4 p-4 m-4 flex'
          onClick={handleClick}>
            {buttonText}
        </button> 
        </div>
      </React.Fragment>
  )
}

export default TreeInventoryControl