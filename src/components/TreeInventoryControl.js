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

  handleClick = () => {
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

  handleDeletingPlanting = (id) => {
    const newMainPlantingList = state.mainPlantingList.filter(planting => planting.id !== id);
    setState({
      ...state,
      mainPlantingList: newMainPlantingList,
      selectedPlanting: null
    });
  }

  handleEditClick = () => {
    setState({...state, editing: true});
  }

  handleEditingPlantingInList = (plantingToEdit) => {
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

  handleAddingNewPlantingToList = (newPlanting) => {
    const newMainPlantingList = state.mainPlantingList.concat(newPlanting);
    setState({
      ...state,
      formVisible: false,
      mainPlantingList: newMainPlantingList
    });
  }

  handleChangingSelectedPlanting = (id) => {
    const selectedPlanting = this.state.mainPlantingList.filter(planting => planting.id === id)[0];
    setState(...state, {selectedPlanting: selectedPlanting});
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