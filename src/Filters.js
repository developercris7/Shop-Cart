import React from 'react'

const Filters = ({ filters, activeFilter, setActiveFilter }) => {

  return (
    <div className="filter-container ">
      <div className="filter-wrapper">
        <div className=" mx-md-3  me-2 my-auto fs-5" data-aos="fade-right"
          data-aos-delay="10">
          <i className="fa-solid fa-sliders" style={{ color: "#526D82" }}></i>
        </div>
        {
          filters.map((filter, index) => (
      
            <div className={`filter  ${(activeFilter === filter.title) ? 'active-filter' : null}`} key={filter.id} role="button" onClick={() => setActiveFilter(filter.title)}
            >
              <span>{filter.title}</span>
            </div>
             
       
          ))
        }

      </div>
    </div>
  )
}

export default Filters