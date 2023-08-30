import Carousel from 'react-bootstrap/Carousel';

const Carousal =() => {
  return (
    
    <Carousel fade className="mb-3">
      <Carousel.Item  className='carousal-slide'>
       
        <img src="https://img.freepik.com/premium-photo/laptop-smartphone-mockup_935506-2063.jpg?size=626&ext=jpg" alt="Slide 1" className='carousal-img ' />
        <div className="opacity"></div>

        <Carousel.Caption className='caption'>
          <h2>Laptops & Mobiles</h2>
          <p className="carousal-text">Discover cutting-edge gadgets for every need. 
          <span className='d-none d-md-block'>Stay connected and entertained with our top tech selection.</span>
           Explore now!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item  className='carousal-slide'>
      <img src=" https://img.freepik.com/free-photo/sports-shoe-competition-abstract-multi-color-background-generated-by-ai_188544-19600.jpg?size=626&ext=jpg" alt="hii" className='carousal-img'/>
     
        <div className="opacity"></div>
        <Carousel.Caption className='caption'>
          <h2>Sneakers</h2>
          <p className='carousal-text'>Step up your style game with our trendy footwear collection. 
          <span className='d-none d-md-block'>
          From casual to formal, find your perfect pair here.
          </span></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item  className='carousal-slide'>
      <img src="https://img.freepik.com/premium-photo/wooden-cupboard-blue-armchair-cozy-living-room-interior-with-beige-settee_922357-16017.jpg?size=626&ext=jpg" alt="" className='carousal-img img-fluid'/>
    
        <div className="opacity"></div>
        <Carousel.Caption className='caption'>
          <h2>Furnitures</h2>
          <p className="carousal-text">Transform your space with ShopCart's elegant furniture. <span className='d-none d-md-block'>Explore a range of designs that combine style and functionality. Redefine your home today!</span></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousal;