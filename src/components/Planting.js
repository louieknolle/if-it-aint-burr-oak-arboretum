import React from "react";
import PropTypes from "prop-types";

function Planting(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenPlantingClicked(props.id)}>
        <h3>{props.species} Planting</h3>
        <h5>{props.treeInventory} Trees Left</h5>
      </div>
        <button className='border-4 p-4 m-4 flex' onClick={() => props.whenSellTreeClicked(props.id)} >Sell a tree</button>
        <hr/>
    </React.Fragment>
  );
}

Planting.propTypes = {
  species: PropTypes.string,
  treeInventory: PropTypes.number,
  whenPlantingClicked: PropTypes.func
}

export default Planting;