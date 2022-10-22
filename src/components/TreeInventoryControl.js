import React, { useState } from 'react';
import NewPlantingForm from './NewPlantingForm';
import EditPlantingForm from './EditPlantingForm';
import PlantingList from './PlantingList';
import PlantingDetail from './PlantingDetail';

const TreeInventoryControl = () => {
  const [state, setState] = useState({
    formVisible: false,
    mainPlantingList: [],
    selectedPlanting: null,
    editing: false
  })

  function handleClick() {
    if (state.selectedPlanting != null) {
      setState({
        ...state,
        formVisible: false,
        selectedPlanting: null,
        editing: false
      })
    } else {
      setState(prevState => ({
        formVisible: !prevState.formVisible
      }))
    }
  }

  function handleDeletingPlanting(id) {
    const newMainPlantingList = state.mainPlantingList.filter(planting => planting.id !== id);
    setState({
      ...state,
      mainPlantingList: newMainPlantingList,
      selectedPlanting: null
    });
  }

  function handleEditClick() {
    setState({...state, editing: true});
  }

  function handleEditingPlantingInList(plantingToEdit) {
    const editedMainPlantingList = state.mainPlantingList
      .filter(planting => planting.id !== state.selectedPlanting.id)
      .concat(plantingToEdit);
    setState({
      ...state,
      mainPlantingList: editedMainPlantingList,
      editing: false,
      selectedPlanting: null
    });
  }

  function handleAddingNewPlantingToList(newPlanting) {
    const newMainPlantingList = state.mainPlantingList.concat(newPlanting);
    setState({
      ...state,
      formVisible: false,
      mainPlantingList: newMainPlantingList
    });
  }

  function handleChangingSelectedPlanting(id) {
    const selectedPlanting = state.mainPlantingList.filter(planting => planting.id === id)[0];
    setState(...state, {selectedPlanting: selectedPlanting});
  }

  let currentlyVisibleState = null;
  let buttonText = null; 

  if (state.editing ) {      
    currentlyVisibleState = <EditPlantingForm planting = {state.selectedPlanting} onEditPlanting = {handleEditingPlantingInList} />
    buttonText = "Return to Planting List";
  } else if (state.selectedPlanting != null) {
    currentlyVisibleState = <PlantingDetail 
    planting={state.selectedPlanting} 
    onClickingDelete={handleDeletingPlanting}
    onClickingEdit = {handleEditClick} />
    buttonText = "Return to Planting List";
  } else if (state.formVisible) {
    currentlyVisibleState = <NewPlantingForm onNewPlantingCreation={handleAddingNewPlantingToList}/>;
    buttonText = "Return to Planting List"; 
  } else {
    currentlyVisibleState = <PlantingList onPlantingSelection={handleChangingSelectedPlanting} plantingList={state.mainPlantingList} />;
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