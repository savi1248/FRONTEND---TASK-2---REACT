import './carousel.css';
import React from 'react'
import {Carousel} from 'react-bootstrap'


const Slider= () => {
  return (
    
    <>
     <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg"
                        alt="First slide"
                    />
                          <Carousel.Caption>
          <h3>Food Resturant</h3>
          <p>Best Food Resturant In India</p>
          
          <button className='button'>ORDER NOW</button>
        
          
        </Carousel.Caption>
                    
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg"
                        alt="Second slide"
                    />
                          <Carousel.Caption>
          <h3>Food Resturant</h3>
          <p>Best Food Resturant In India</p>
          
          <button className='button'>ORDER NOW</button>
        
          
        </Carousel.Caption>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wallpapersmug.com/download/1920x1080/ddcbbf/food-pizza-baking.jpg"
                        alt="Third slide"
                    />
                          <Carousel.Caption>
          <h3>Food Resturant</h3>
          <p>Best Food Resturant In India</p>
          
          <button className='button'>ORDER NOW</button>
        
          
        </Carousel.Caption>
                    
                </Carousel.Item>
                
            </Carousel>
     

     </>
    
  );
}

export default Slider;
