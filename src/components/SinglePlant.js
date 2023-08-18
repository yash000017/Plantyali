import React from 'react'

const SinglePlant = ({ plants }) => {
  return (
    <div>

      <div className='plant_container'>
        <div className='plant'>
          <div className='plant-img'>
            <img className='plant-img-wrapper'alt='img' src='Marigold.jpg'></img>
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

        {plants.map(plant => (

          <div className='plant'>
            <div className='plant-img'>
              <img className='plant-img-wrapper' src={plant.Img} alt={plant['Common name']} />  
            </div>

            <div className='plant-name'>
              <p className='plant-name-p'>{plant['Common name']}</p>
            </div>
          </div>
        ))}
      </div>
          
    </div>
  )
}

export default SinglePlant
