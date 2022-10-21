import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
  return (
    <React.Fragment>
      <div className='bg-teal-500 text-center text-sky-50 p-20 m-auto '>
        <h1 className='text-3xl' >If it Ain't Burr Oak Inventory Manager</h1>
        <h4 className='text-xl pt-2'>Create plantings, sell trees, view Oak cultivars & manage planting details</h4>
      </div>
    </React.Fragment>
  )
}

Header.propTypes = {}

export default Header