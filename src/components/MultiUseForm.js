import React from 'react';
import PropTypes from 'prop-types';

const MultiUseForm = (props) => {
  return (
    <React.Fragment>
      <form 
        onSubmit={props.formSubmissionHandler}
        className='container py-10 px-10 mx-0 min-w-full grid place-items-center'
        >
        <input
          className='border-2 m-2'
          type='text'
          name='species'
          placeholder='Tree species' />
        <input
          className='border-2 m-2'
          type='text'
          name='hardinessZone'
          placeholder='Plant Hardiness Zone' />
        <input
          type='text'
          className='border-2 m-2'
          name='typeOfSoil'
          placeholder='Prefrred soil (e.g. loamy)' />
        <input
          type='number'
          className='border-2 m-2'
          name='treeInventory'
          placeholder='Total trees planted' />  
        <button 
          className='border-4 p-4 m-4 flex'
          type='submit'>
            {props.buttonText}
        </button>
      </form>
    </React.Fragment>
  )
}

MultiUseForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default MultiUseForm;