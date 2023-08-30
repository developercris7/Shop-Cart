import React from 'react'

const Header = ({ cart, setCart, cartProducts,handleDeleteCart ,notification,setNotification}) => {
    const cartOpen = () => {
        setCart(true)
        setNotification(false)
    }

    const cartClose = () => {
        setCart(false)
        setNotification(false)
    }
    return (
        <div className="header-container mt-1">
            <div className="header-wrapper py-2">
               
       <div className="logo">
       <img src="https://i.ibb.co/8rfF9CX/IMG-20230829-202656-removebg-preview.png" alt="logo" className='w-100'/>
       </div>
                <div className='d-flex align-items-center flex-wrap '>
                    <button className=" d-flex align-items-center 
                    mx-3 header-cart-btn d-none d-md-block" onClick={() =>cartOpen() }>
                        <i className="fa-solid fa-cart-plus"></i>
                        <span className='
                        btn-text'>Cart</span>
                    {(notification) ? (
                        <div className="notify" data-aos="zoom-in"></div>
                    ): (null)}
                    </button>
                    <button className="btn 
                    align-items-center d-none d-md-block text-white" style={{backgroundColor:"#FF3366"}}>
                        <i className="fa-solid fa-user"></i>
                        <span className='
                        btn-text'>Account</span>
                    </button>
                     
                     <span className="d-md-none cart-icon" role='button' onClick={() =>cartOpen() }>
                     <i className={`fa-solid fa-cart-plus fs-5 mx-2 ${(notification) ? 'fa-shake' : ''}`}></i>
                   {
                    (notification) ? (  <div className="notify-1 position-absolute "></div>) : null
                   }
                     </span>
                     <span className="d-md-none">
                     <i className="fa-solid fa-user fs-4 mx-2"></i>
                     </span>
                     
                    
                </div>

                {/* Cart Section Starts*/}

                {
                (cart) ? (
                    <div className="cart" data-aos="zoom-in" data-aos-duration="500">
                        <div className="cart-header">
                            <span className="fs-4">Your Products</span>
                            <button className="close-btn " onClick={() => cartClose()}>
                            <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="cart-body">

                            { (cartProducts.length) ? (cartProducts.map((product) => (
                                <div className="cart-item" key={product.id}>
                                    <div className="d-flex align-items-center">
                                        <div className="cart-img">
                                           <img src={product.cover} alt={product.name} className='img-fluid h-100' />
                                        </div>

                                        <div className="cart-product mx-3">
                                            <span>{product.name}</span>
                                            <br />
                                            <span>{product.price}</span>
                                        </div>
                                    </div>
                                    <i className="fa-solid fa-trash-can fs-5" role="button" onClick={()=>handleDeleteCart(product.id)}></i>
                                </div>
                            ))): (
                               <div className="h-100 d-flex justify-content-center align-items-center flex-column">
                                <img src="https://cdn-icons-png.flaticon.com/128/11329/11329060.png" alt="cart-empty" className='img-fluid' />
                                <p className='text-white fs-4'>Your Cart is Empty!</p>
                               </div>
                            )}

                        </div>
                    </div>
                ) : null}
                {/* Cart Section Ends */}

            </div>
        </div>
    )
}

export default Header