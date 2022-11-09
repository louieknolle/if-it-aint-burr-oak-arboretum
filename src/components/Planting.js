import React from "react";
import PropTypes from "prop-types";

function Planting(props){

  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center border border-amber-900 shadow-md">
        <div className="cursor-pointer p-4" onClick = {() => props.whenPlantingClicked(props.id) } >
          <h3 className="hover:decoration-solid" >{props.species} Planting</h3>
          <h5 className="hover:decoration-solid" >{props.treeInventory} Trees Left</h5>
        </div>
        <button className='border-4 p-4 m-4 flex' onClick={() => props.whenSellTreeClicked(props.id)} disabled={!props.treeInventory}>
          {(props.treeInventory) ? 'Sell a tree' : 'Sold out!'}
        </button>
      </div> 
    </React.Fragment>
  );
}

Planting.propTypes = {
  species: PropTypes.string,
  treeInventory: PropTypes.number,
  whenPlantingClicked: PropTypes.func
}

export default Planting;