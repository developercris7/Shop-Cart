import React from 'react'

const Products = ({products,handleAddToCart}) => {
  return (
   <div className="product-container">
    <h2>Products For You!</h2>
    <div className="product-wrapper">
      {
        products.map((product,index)=> (
          <div className="product" key={product.id} data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-delay = {index*50}>
          <div className="product-img">
<img src={product.cover} alt={product.name} className='h-100' />
          </div>
          <span className='product-text'>{product.name}</span>

          <div className="price-wrapper">
            <span>{product.price}</span>
            {(product.addCart) ? (
              <div data-aos="zoom-in"
              data-aos-duration="800">
                 <button className='cart-btn' 
              >
              <i className="fa-solid fa-circle-check me-1"
             
              ></i>
              <span>Added</span></button>
              </div>
             
            ):
            <button className='cart-btn'
            onClick={()=>handleAddToCart(product.id)}
            >
            <i className="fa-solid fa-cart-plus me-1"></i>
            <span>Add</span></button>
            }
           
          </div>
       </div>
        ))
      }
          

    </div>
   </div>
  )
}

export default Products