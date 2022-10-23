import React from "react";
import PropTypes from "prop-types";

function PlantingDetail(props){
  const { planting, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment >
      <div className="flex flex-col justify-center items-center border border-amber-900 shadow-md p-4">
        <h1 className="text-xl border-b-2 pb-2">Planting Detail</h1>
        <h3>{planting.species}</h3>
        <h5>USDA Plant Hardiness Zone: {planting.hardinessZone}</h5>
        <h5>Preferred Soil: {planting.typeOfSoil}</h5>
        <h5>Trees in planting: {planting.treeInventory}</h5>
      </div>
      <button className='border-4 p-4 m-4 flex' onClick={onClickingEdit}>Update Planting</button>
      <button className='border-4 p-4 m-4 flex' onClick={()=> onClickingDelete(planting.id)}>Remove planting</button>
      <hr/>
    </React.Fragment>
  );
}

PlantingDetail.propTypes = {
  planting: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default PlantingDetail;