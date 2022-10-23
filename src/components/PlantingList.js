import React from "react";
import Planting from "./Planting";
import PropTypes from "prop-types";

function PlantingList(props){

  return (
    <React.Fragment>
      <div className='flex flex-wrap justify-center items-center gap-8'>
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
      </div>
    </React.Fragment>
  );
}

PlantingList.propTypes = {
  plantingList: PropTypes.array,
  onPlantingSelection: PropTypes.func
};

export default PlantingList;