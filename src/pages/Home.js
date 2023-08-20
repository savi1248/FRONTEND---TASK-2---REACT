import React from 'react'
import Layout from '../components/Layout'

import  Slider from "../components/Slider";
const Home = () => {
  return (
    <>
         
    
    <Layout>
    
      
      <div className="home" >
            {/* <div className='headerContainer'>
            <h2>Food Resturant</h2>
            <p>Best Food In India</p>
            <Link>
            <button> ORDER NOW</button>
            </Link>
            
           
            </div> */}
          <Slider/>
        </div>
        
        
    </Layout>
    </>
  )
}

export default Home