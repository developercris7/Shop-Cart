import React from 'react'

const Slider = ({slides}) => {
  return (
  <div className="slide-container">
   <h2>Top 
Recommendation!
</h2>
    <div className="slide-wrapper">
      {
        slides.map((slide)=> (
<div className="slide-item" key = {slide.id} data-aos="zoom-in" data-aos-duration="800">
            <div className="slide-img">
               <img src={slide.cover} alt={slide.name}  className='img-fluid h-75'/>
            </div>
            <div className="slide-text">{slide.name}</div>
          </div>
        ))
      }
          

    </div>
  </div>
  )
}

export default Slider