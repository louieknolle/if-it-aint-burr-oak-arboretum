import React from "react";
import Planting from "./Planting";
import PropTypes from "prop-types";

function PlantingList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.plantingList.map((planting) =>
        <Planting 
          whenPlantingClicked={props.onPlantingSelection}
          whenSellTreeClicked={props.onClickingSellTree}
          species={planting.species}
          hardinessZone={planting.hardinessZone}
          typeOfSoil={planting.typeOfSoil}
          treeInventory={planting.treeInventory}
          id={planting.id}
          key={planting.id}
          className='card'
          />
      )}
    </React.Fragment>
  );
}

PlantingList.propTypes = {
  plantingList: PropTypes.array,
  onPlantingSelection: PropTypes.func
};

export default PlantingList;