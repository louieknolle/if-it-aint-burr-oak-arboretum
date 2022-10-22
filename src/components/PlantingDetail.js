import React from "react";
import PropTypes from "prop-types";

function PlantingDetail(props){
  const { planting, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <h1>Planting Detail</h1>
      <h3>{planting.species}</h3>
      <h5>USDA Plant Hardiness Zone:{planting.hardinessZone}</h5>
      <h5>Preferred Soil: {planting.typeOfSoil}</h5>
      <button onClick={onClickingEdit}>Update Planting</button>
      <button onClick={()=> onClickingDelete(planting.id)}>Remove planting</button>
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