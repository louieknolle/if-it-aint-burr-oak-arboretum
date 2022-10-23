import React from 'react';

const Header = props => {
  return (
    <React.Fragment>
      <div className='bg-teal-500 text-center text-sky-50 p-20 m-auto '>
        <h1 className='text-3xl' >If It Ain't Burr Oak: Inventory Manager</h1>
        <h4 className='text-xl pt-2'>Create plantings, sell trees, view cultivars & manage planting details</h4>
      </div>
    </React.Fragment>
  )
}

export default Header;