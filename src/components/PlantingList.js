import React from "react";
import Planting from "./Planting";
import PropTypes from "prop-types";

function PlantingList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.PlantingList.map((planting) =>
        <Planting 
          whenPlantingClicked={props.onPlantingSelection}
          species={planting.species}
          hardinessZone={planting.hardinessZone}
          typeOfSoil={planting.typeOfSoil}
          id={planting.id}
          key={planting.id}/>
      )}
    </React.Fragment>
  );
}

PlantingList.propTypes = {
  plantingList: PropTypes.array,
  onPlantingSelection: PropTypes.func
};

export default PlantingList;