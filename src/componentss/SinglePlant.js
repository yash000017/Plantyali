import React from 'react'

const SinglePlant = () => {
  return (
    <div>
          <div className='plant'>
            <div className='plant-img'>
              <img className='plant-img-wrapper' src='Marigold.jpg'></img>
            </div>

            <div className='plant-spec'>
              <p className='plant-spec-p'>ANNUALS</p>
            </div>

            <div className='plant-name'>
              <p className='plant-name-p'>Marigold</p>
            </div>

            <div className='plant-type'>
              <p className='plant-type-p'>Indoor plants...</p>
            </div>
          </div>
    </div>
  )
}

export default SinglePlant