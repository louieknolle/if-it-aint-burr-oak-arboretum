import React from "react";
import PropTypes from "prop-types";

function Planting(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenPlantingClicked(props.id)}>
        <h3>{props.species} Planting</h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Planting.propTypes = {
  species: PropTypes.string,
  id: PropTypes.string,
  whenPlantingClicked: PropTypes.func
}

export default Planting;