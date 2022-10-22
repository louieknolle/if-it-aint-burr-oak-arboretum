import React from 'react'
import PropTypes from 'prop-types'

const MultiUseForm = (props) => {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='species'
          placeholder='Tree species' />
        <input
          type='text'
          name='hardinessZone'
          placeholder='Plant Hardiness Zone' />
        <textarea
          name='typeOfSoil'
          placeholder='Prefrred soil (e.g. loamy, peat, sandy)' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

MultiUseForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default MultiUseForm;